package server

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	makePb "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/protobuf/phone"
	"github.com/rickypai/web-template/api/server/cursor"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Server struct {
	phone.UnimplementedPhoneServiceServer
}

func (s *Server) ListByPage(ctx context.Context, req *phone.ListByPageRequest) (*phone.ListByPageResponse, error) {
	page, cursor, count := cursor.GetPageOptions(req)
	results := make([]*phone.Phone, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getPhone(i))
	}

	return &phone.ListByPageResponse{
		Results:    results,
		NextPage:   page + 1,
		HasNext:    true,
		TotalPages: 100,
	}, nil
}

func (s *Server) ListByCursor(ctx context.Context, in *phone.ListByCursorRequest) (*phone.ListByCursorResponse, error) {
	cursor, count := cursor.GetCursorOptions(in)
	results := make([]*phone.Phone, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getPhone(i))
	}

	nextPageCursor := results[len(results)-1].GetId()

	return &phone.ListByCursorResponse{
		Results: results,
		Cursor:  nextPageCursor,
	}, nil
}

func (s *Server) GetOneByID(ctx context.Context, in *phone.GetOneByIDRequest) (*phone.GetOneByIDResponse, error) {
	fmt.Printf("Called GetPhone with %+v\n", in)

	id := in.GetId()

	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return &phone.GetOneByIDResponse{
		Result: getPhone(id),
	}, nil
}

func getPhone(id int64) *phone.Phone {
	ts := ptypes.TimestampNow()

	return &phone.Phone{
		Id:   id,
		Name: fmt.Sprintf("Phone #%v", id),
		Make: &makePb.Make{
			Id:   id,
			Name: fmt.Sprintf("Make #%v", id),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},
		Os: &os.OS{
			Id:   id,
			Name: fmt.Sprintf("OS #%v", id),

			CreatedAt:  ts,
			ModifiedAt: ts,
		},

		CreatedAt:  ts,
		ModifiedAt: ts,
	}
}
