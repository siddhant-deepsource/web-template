package os

import (
	"fmt"

	rpc "github.com/rickypai/web-template/api/protobuf/os"
	"github.com/rickypai/web-template/api/server/address"
	"google.golang.org/grpc"
)

func NewOSReaderClient() (rpc.OSReaderClient, error) {
	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	conn, err := grpc.Dial(address.OSReaderAddress, opts...)
	if err != nil {
		return nil, fmt.Errorf("error dialing %s: %w", address.OSReaderAddress, err)
	}
	defer conn.Close()

	return rpc.NewOSReaderClient(conn), nil
}
