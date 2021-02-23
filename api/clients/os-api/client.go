package os

import (
	"fmt"

	rpc "github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/server/address"
	"google.golang.org/grpc"
)

func NewOsAPIClient() (rpc.OSServiceClient, error) {
	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	conn, err := grpc.Dial(address.OSAPIAddress, opts...)
	if err != nil {
		return nil, fmt.Errorf("error dialing %s: %w", address.OSAPIAddress, err)
	}
	defer conn.Close()

	return rpc.NewOSServiceClient(conn), nil
}
