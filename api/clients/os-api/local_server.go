package os

import (
	"context"
	"database/sql"

	"github.com/rickypai/web-template/api/os-api/server"
	rpc "github.com/rickypai/web-template/api/protobuf/os"
	"google.golang.org/grpc"
)

func NewLocalReadServer(db *sql.DB) rpc.OSReaderClient {
	return &LocalReadServer{
		localServer: server.NewReadServer(db),
	}
}

type LocalReadServer struct {
	localServer rpc.OSReaderServer
}

func (s *LocalReadServer) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest, opts ...grpc.CallOption) (*rpc.GetOneByIDResponse, error) {
	return s.localServer.GetOneByID(ctx, req)
}

func (s *LocalReadServer) GetManyByIDs(ctx context.Context, req *rpc.GetManyByIDsRequest, opts ...grpc.CallOption) (*rpc.GetManyByIDsResponse, error) {
	return s.localServer.GetManyByIDs(ctx, req)
}

func (s *LocalReadServer) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest, opts ...grpc.CallOption) (*rpc.ListByCursorResponse, error) {
	return s.localServer.ListByCursor(ctx, req)
}

func (s *LocalReadServer) ListByPage(ctx context.Context, req *rpc.ListByPageRequest, opts ...grpc.CallOption) (*rpc.ListByPageResponse, error) {
	return s.localServer.ListByPage(ctx, req)
}
