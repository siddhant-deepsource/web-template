package server

import (
	"context"
	"time"

	"github.com/golang/protobuf/proto"
	"github.com/rickypai/web-template/api/s3"
	"github.com/rickypai/web-template/protobuf/api"
	"github.com/rickypai/web-template/protobuf/image"
	"google.golang.org/protobuf/types/known/durationpb"
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

func (s *Server) GetPresignedPutURL(ctx context.Context, in *api.GetPresignedPutURLRequest) (*api.GetPresignedPutURLResponse, error) {
	url, err := s3.PresignPutURL("web-template-temp-dev", in.GetFilename(), "", 15*time.Minute)
	if err != nil {
		return nil, err
	}

	return &api.GetPresignedPutURLResponse{
		Url:      url,
		Duration: durationpb.New(15 * time.Minute),
	}, nil
}
