package make

import (
	"context"
	"database/sql"

	"github.com/rickypai/web-template/api/make-api/server"
	rpc "github.com/rickypai/web-template/api/protobuf/make"
	"google.golang.org/grpc"
)

func NewMakeAPILocalServer(db *sql.DB) rpc.MakeServiceClient {
	return &MakeServiceLocalServer{
		localServer: server.NewServer(db),
	}
}

type MakeServiceLocalServer struct {
	localServer rpc.MakeServiceServer
}

func (s *MakeServiceLocalServer) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest, opts ...grpc.CallOption) (*rpc.GetOneByIDResponse, error) {
	return s.localServer.GetOneByID(ctx, req)
}

func (s *MakeServiceLocalServer) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest, opts ...grpc.CallOption) (*rpc.ListByCursorResponse, error) {
	return s.localServer.ListByCursor(ctx, req)
}

func (s *MakeServiceLocalServer) ListByPage(ctx context.Context, req *rpc.ListByPageRequest, opts ...grpc.CallOption) (*rpc.ListByPageResponse, error) {
	return s.localServer.ListByPage(ctx, req)
}
