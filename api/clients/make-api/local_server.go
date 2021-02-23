package make

import (
	"context"
	"database/sql"

	"github.com/rickypai/web-template/api/make-api/server"
	rpc "github.com/rickypai/web-template/api/protobuf/make"
	"google.golang.org/grpc"
)

func NewMakeReaderLocalServer(db *sql.DB) rpc.MakeReaderClient {
	return &MakeReaderLocalServer{
		localServer: server.NewServer(db),
	}
}

type MakeReaderLocalServer struct {
	localServer rpc.MakeReaderServer
}

func (s *MakeReaderLocalServer) GetOneByID(ctx context.Context, req *rpc.GetOneByIDRequest, opts ...grpc.CallOption) (*rpc.GetOneByIDResponse, error) {
	return s.localServer.GetOneByID(ctx, req)
}

func (s *MakeReaderLocalServer) GetManyByIDs(ctx context.Context, req *rpc.GetManyByIDsRequest, opts ...grpc.CallOption) (*rpc.GetManyByIDsResponse, error) {
	return s.localServer.GetManyByIDs(ctx, req)
}

func (s *MakeReaderLocalServer) ListByCursor(ctx context.Context, req *rpc.ListByCursorRequest, opts ...grpc.CallOption) (*rpc.ListByCursorResponse, error) {
	return s.localServer.ListByCursor(ctx, req)
}

func (s *MakeReaderLocalServer) ListByPage(ctx context.Context, req *rpc.ListByPageRequest, opts ...grpc.CallOption) (*rpc.ListByPageResponse, error) {
	return s.localServer.ListByPage(ctx, req)
}
