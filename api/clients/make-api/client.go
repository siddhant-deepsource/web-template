package make

import (
	"fmt"

	rpc "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/server/address"
	"google.golang.org/grpc"
)

func NewMakeAPIClient() (rpc.MakeServiceClient, error) {
	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	conn, err := grpc.Dial(address.MakeAPIAddress, opts...)
	if err != nil {
		return nil, fmt.Errorf("error dialing %s: %w", address.MakeAPIAddress, err)
	}
	defer conn.Close()

	return rpc.NewMakeServiceClient(conn), nil
}
