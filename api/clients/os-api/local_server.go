package os

import (
	"context"
	"database/sql"

	"github.com/rickypai/web-template/api/os-api/server"
	rpc "github.com/rickypai/web-template/api/protobuf/os"
	"google.golang.org/grpc"
)

func NewOSAPILocalServer(db *sql.DB) rpc.OSServiceClient {
	return &OSServiceLocalServer{
		localServer: server.NewServer(db),
	}
}

type OSServiceLocalServer struct {
	localServer rpc.OSServiceServer
}

func (s *OSServiceLocalServer) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest, opts ...grpc.CallOption) (*rpc.GetOneByIDResponse, error) {
	return s.localServer.GetOneByID(ctx, req)
}

func (s *OSServiceLocalServer) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest, opts ...grpc.CallOption) (*rpc.ListByCursorResponse, error) {
	return s.localServer.ListByCursor(ctx, req)
}

func (s *OSServiceLocalServer) ListByPage(ctx context.Context, req *rpc.ListByPageRequest, opts ...grpc.CallOption) (*rpc.ListByPageResponse, error) {
	return s.localServer.ListByPage(ctx, req)
}
