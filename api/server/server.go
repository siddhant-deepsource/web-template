package server

import (
	"context"

	"github.com/golang/protobuf/proto"
	"github.com/rickypai/web-template/protobuf/api"
	"github.com/rickypai/web-template/protobuf/image"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type Server struct {
	api.UnimplementedAPIServer
}

func (s *Server) GetImage(ctx context.Context, in *api.GetImageRequest) (*api.GetImageResponse, error) {
	return &api.GetImageResponse{
		Image: &image.Image{
			Id:        proto.Int64(1),
			Url:       proto.String("https://lol"),
			CreatedAt: timestamppb.Now(),
		},
	}, nil
}
