package server

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/ptypes"
	"github.com/rickypai/web-template/protobuf/api"
	"github.com/rickypai/web-template/protobuf/make"
	"github.com/rickypai/web-template/protobuf/os"
	"github.com/rickypai/web-template/protobuf/phone"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Server struct {
	api.UnimplementedAPIServer
}

func (s *Server) GetPhone(ctx context.Context, in *api.GetPhoneRequest) (*api.GetPhoneResponse, error) {
	if in.GetId() == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if in.GetId() == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	ts := ptypes.TimestampNow()

	return &api.GetPhoneResponse{
		Phone: &phone.Phone{
			Id:   proto.Int64(in.GetId()),
			Name: proto.String(fmt.Sprintf("Phone #%v", in.GetId())),
			Make: &make.Make{
				Id:   proto.Int64(in.GetId()),
				Name: proto.String(fmt.Sprintf("Make #%v", in.GetId())),

				CreatedAt:  ts,
				ModifiedAt: ts,
			},
			Os: &os.OS{
				Id:   proto.Int64(in.GetId()),
				Name: proto.String(fmt.Sprintf("Make #%v", in.GetId())),

				CreatedAt:  ts,
				ModifiedAt: ts,
			},

			CreatedAt:  ts,
			ModifiedAt: ts,
		},
	}, nil
}
