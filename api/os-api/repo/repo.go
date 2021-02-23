package repo

import (
	"context"
	"fmt"

	"github.com/golang/protobuf/ptypes"
	rpc "github.com/rickypai/web-template/api/protobuf/os"
	cursorPkg "github.com/rickypai/web-template/api/server/cursor"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type modelT = *rpc.OS

func NewRepo() *Repo {
	return &Repo{}
}

type Repo struct {
}

func (s *Repo) ListByPage(ctx context.Context, req cursorPkg.PageRequest) ([]modelT, *cursorPkg.PageResult, error) {
	page, cursor, count := cursorPkg.GetPageOptions(req)
	results := make([]modelT, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getOS(i))
	}

	return results, &cursorPkg.PageResult{
		NextPage:   page + 1,
		HasNext:    true,
		TotalPages: 100,
	}, nil
}

func (s *Repo) ListByCursor(ctx context.Context, req cursorPkg.CursorRequest) ([]modelT, *cursorPkg.CursorResult, error) {
	cursor, count := cursorPkg.GetCursorOptions(req)
	results := make([]modelT, 0, count)

	for i := cursor + 1; i < cursor+1+int64(count); i++ {
		results = append(results, getOS(i))
	}

	nextPageCursor := results[len(results)-1].GetId()

	return results, &cursorPkg.CursorResult{
		Cursor: nextPageCursor,
	}, nil
}

func (s *Repo) GetOneByID(ctx context.Context, id int64) (modelT, error) {
	if id == 404 {
		return nil, status.Error(codes.NotFound, "not found")
	}

	if id == 500 {
		return nil, status.Error(codes.Unknown, "unknown")
	}

	return getOS(id), nil
}

func getOS(id int64) *rpc.OS {
	ts := ptypes.TimestampNow()

	return &rpc.OS{
		Id:   id,
		Name: fmt.Sprintf("OS #%v", id),

		CreatedAt:  ts,
		ModifiedAt: ts,
	}
}
