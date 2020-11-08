proto:
	protoc --version
	protoc -I=. protobuf/**/*.proto \
		--js_out=import_style=commonjs:. \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:.

proto-setup:
	curl -L https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64 > ${HOME}/.local/bin/protoc-gen-grpc-web
	PB_REL="https://github.com/protocolbuffers/protobuf/releases"
	curl -LO ${PB_REL}/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip
	unzip protoc-3.13.0-linux-x86_64.zip -d ${HOME}/.local
