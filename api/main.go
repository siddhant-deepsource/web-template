package main

import (
	"log"
	"net"
	"net/http"

	"github.com/rickypai/web-template/api/extauth"
	makeSrv "github.com/rickypai/web-template/api/make-api/server"
	osSrv "github.com/rickypai/web-template/api/os-api/server"
	phoneSrv "github.com/rickypai/web-template/api/phone-api/server"
	"github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/protobuf/phone"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
)

const (
	grpcPort = ":50051"
	httpPort = ":50052"
)

func main() {
	lis, err := net.Listen("tcp", grpcPort)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	phone.RegisterPhoneServiceServer(s, phoneSrv.NewServer())
	make.RegisterMakeServiceServer(s, makeSrv.NewServer())
	os.RegisterOSServiceServer(s, osSrv.NewServer())

	extAuth := extauth.NewExternalAuth()

	g := &errgroup.Group{}
	g.Go(func() error {
		log.Printf("listening gRPC on %s", grpcPort)
		return s.Serve(lis)
	})

	g.Go(func() error {
		log.Printf("listening HTTP on %s", httpPort)
		return http.ListenAndServe(httpPort, extAuth)
	})

	if err := g.Wait(); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
