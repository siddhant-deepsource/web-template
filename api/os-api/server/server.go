package server

import (
	"context"
	"fmt"

	"github.com/rickypai/web-template/api/os-api/repo"
	rpc "github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/server/cursor"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type modelT = *rpc.OS

type modelTReader interface {
	GetOneByID(context.Context, int64) (modelT, error)

	ListByPage(context.Context, cursor.PageRequest) ([]modelT, *cursor.PageResult, error)
	ListByCursor(context.Context, cursor.CursorRequest) ([]modelT, *cursor.CursorResult, error)
}

func NewServer() *Server {
	return &Server{
		repo: repo.NewRepo(),
	}
}

type Server struct {
	rpc.UnimplementedOSServiceServer

	repo modelTReader
}

func (s *Server) ListByPage(ctx context.Context, req *rpc.ListByPageRequest) (*rpc.ListByPageResponse, error) {
	results, pageResult, err := s.repo.ListByPage(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("error fetching oss: %w", err)
	}

	return &rpc.ListByPageResponse{
		Results:    results,
		NextPage:   pageResult.NextPage,
		TotalPages: pageResult.TotalPages,
		HasNext:    pageResult.HasNext,
	}, nil
}

func (s *Server) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest) (*rpc.ListByCursorResponse, error) {
	results, cursorResult, err := s.repo.ListByCursor(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("error fetching oss: %w", err)
	}

	return &rpc.ListByCursorResponse{
		Results: results,
		Cursor:  cursorResult.Cursor,
	}, nil
}

func (s *Server) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest) (*rpc.GetOneByIDResponse, error) {
	result, err := s.repo.GetOneByID(ctx, req.GetId())
	if err != nil {
		return nil, fmt.Errorf("error fetching os: %w", err)
	}

	return &rpc.GetOneByIDResponse{
		Result: result,
	}, nil
}
