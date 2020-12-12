package main

import (
	"log"
	"net"

	"github.com/rickypai/web-template/api/server"
	"github.com/rickypai/web-template/protobuf/api"
	"google.golang.org/grpc"
)

const (
	grpcPort = ":50051"
)

func main() {
	lis, err := net.Listen("tcp", grpcPort)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	api.RegisterAPIServer(s, &server.Server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
