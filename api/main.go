package main

import (
	"context"
	"log"
	"net"

	"github.com/golang/protobuf/proto"
	"github.com/rickypai/mmtk/protobuf/api"
	"github.com/rickypai/mmtk/protobuf/image"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const (
	port = ":50051"
)

type server struct {
	api.UnimplementedAPIServer
}

func (s *server) GetImage(ctx context.Context, in *api.GetImageRequest) (*api.GetImageResponse, error) {
	return &api.GetImageResponse{
		Image: &image.Image{
			Id:        proto.Int64(1),
			Url:       proto.String("https://lol"),
			CreatedAt: timestamppb.Now(),
		},
	}, nil
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
