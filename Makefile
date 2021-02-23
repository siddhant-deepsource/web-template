.PHONY: proto envoy proto-setup api web format

PB_REL="https://github.com/protocolbuffers/protobuf/releases"
UNAME_S := $(shell uname -s)

api:
	ibazel run //api

auth:
	ibazel run //api/auth

web:
	(cd web && yarn run dev)

proto:
	rm -rf api/protobuf/**/*.go
	rm -rf web/protobuf/**/*
	protoc --version
	protoc -I=. protobuf/**/*.proto \
		--js_out=import_style=commonjs:web/. \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:web/. \
		--go_out=api/ --go_opt=paths=source_relative \
		--go-grpc_out=api/ --go-grpc_opt=paths=source_relative \
		--plugin=protoc-gen-ts=`which protoc-gen-ts` \
		--ts_out=./web/
	grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:web/ \
		--grpc_out=grpc_js:web/ protobuf/**/*.proto

protos: proto

envoy:
	envoy --config-path envoy/envoy.yaml

proto-setup:
	mkdir -p ${HOME}/.local/bin
ifeq ($(UNAME_S),Linux)
	curl -L https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64 > ${HOME}/.local/bin/protoc-gen-grpc-web
	curl -LO ${PB_REL}/download/v3.15.0/protoc-3.15.0-linux-x86_64.zip
	unzip -o protoc-3.15.0-linux-x86_64.zip -d ${HOME}/.local
	rm protoc-3.15.0-linux-x86_64.zip
	curl -LO https://github.com/protocolbuffers/protobuf-go/releases/download/v1.25.0/protoc-gen-go.v1.25.0.linux.amd64.tar.gz
	tar -xf protoc-gen-go.v1.25.0.linux.amd64.tar.gz -C ${HOME}/.local/bin
	rm protoc-gen-go.v1.25.0.linux.amd64.tar.gz
	curl -LO https://github.com/grpc/grpc-go/releases/download/cmd%2Fprotoc-gen-go-grpc%2Fv1.1.0/protoc-gen-go-grpc.v1.1.0.linux.amd64.tar.gz
	tar -xf protoc-gen-go-grpc.v1.1.0.linux.amd64.tar.gz -C ${HOME}/.local/bin
	rm protoc-gen-go-grpc.v1.1.0.linux.amd64.tar.gz
endif
ifeq ($(UNAME_S),Darwin)
	curl -L https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-darwin-x86_64 > ${HOME}/.local/bin/protoc-gen-grpc-web
	curl -LO ${PB_REL}/download/v3.15.0/protoc-3.15.0-osx-x86_64.zip
	unzip -o protoc-3.15.0-osx-x86_64.zip -d ${HOME}/.local
	rm protoc-3.15.0-osx-x86_64.zip
	curl -LO https://github.com/grpc/grpc-go/releases/download/cmd%2Fprotoc-gen-go-grpc%2Fv1.1.0/protoc-gen-go-grpc.v1.1.0.darwin.amd64.tar.gz
	tar -xf protoc-gen-go-grpc.v1.1.0.darwin.amd64.tar.gz -C ${HOME}/.local/bin
	rm protoc-gen-go-grpc.v1.1.0.darwin.amd64.tar.gz
endif
	chmod +x ${HOME}/.local/bin/protoc-gen-grpc-web
	chmod +x ${HOME}/.local/bin/protoc-gen-go
	chmod +x ${HOME}/.local/bin/protoc-gen-go-grpc
	yarn global add grpc-tools@1.10.0 grpc_tools_node_protoc_ts@5.1.1

format:
	(cd web && yarn run lint)

db-setup:
	mkdir -p ${HOME}/.local/bin
ifeq ($(UNAME_S),Linux)
	curl -LO https://github.com/golang-migrate/migrate/releases/download/v4.14.1/migrate.linux-amd64.tar.gz
	tar -xf migrate.linux-amd64.tar.gz -C ${HOME}/.local/bin
	rm migrate.linux-amd64.tar.gz
	mv ${HOME}/.local/bin/migrate.linux-amd64 ${HOME}/.local/bin/migrate
endif
ifeq ($(UNAME_S),Darwin)
	curl -LO https://github.com/golang-migrate/migrate/releases/download/v4.14.1/migrate.darwin-amd64.tar.gz
	tar -xf migrate.darwin-amd64.tar.gz -C ${HOME}/.local/bin
	rm migrate.darwin-amd64.tar.gz
	mv ${HOME}/.local/bin/migrate.darwin-amd64 ${HOME}/.local/bin/migrate
endif
	chmod +x ${HOME}/.local/bin/migrate

db-migrate:
	migrate -database "${POSTGRES_HOST}/web_template_dev?sslmode=disable" -path db/migrations up

db-up: db-migrate

db-down:
	migrate -database "${POSTGRES_HOST}/web_template_dev?sslmode=disable" -path db/migrations down

db-create:
	echo "SELECT 'CREATE DATABASE web_template_dev' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'web_template_dev')\gexec" | psql

db-drop:
	echo "SELECT 'DROP DATABASE web_template_dev' WHERE EXISTS (SELECT FROM pg_database WHERE datname = 'web_template_dev')\gexec" | psql

db-reset:
	echo "DROP DATABASE IF EXISTS web_template_dev\gexec" | psql
	echo "CREATE DATABASE web_template_dev\gexec" | psql
