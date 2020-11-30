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
	id := in.GetId()

	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return &api.GetPhoneResponse{
		Phone: getPhone(id),
	}, nil
}

func getPhone(id int64) *phone.Phone {
	ts := ptypes.TimestampNow()

	return &phone.Phone{
		Id:   proto.Int64(id),
		Name: proto.String(fmt.Sprintf("Phone #%v", id)),
		Make: &make.Make{
			Id:   proto.Int64(id),
			Name: proto.String(fmt.Sprintf("Make #%v", id)),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},
		Os: &os.OS{
			Id:   proto.Int64(id),
			Name: proto.String(fmt.Sprintf("Make #%v", id)),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},

		CreatedAt:  ts,
		ModifiedAt: ts,
	}
}
