package main

import (
	"context"
	"log"
	"net"

	"github.com/rickypai/mmtk/protobuf/api"
	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

type server struct {
	api.UnimplementedAPIServer
}

func (s *server) GetImage(ctx context.Context, in *api.GetImageRequest) (*api.GetImageResponse, error) {
	return &api.GetImageResponse{}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	api.RegisterAPIServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
