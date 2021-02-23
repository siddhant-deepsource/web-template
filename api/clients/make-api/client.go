package make

import (
	"fmt"

	rpc "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/server/address"
	"google.golang.org/grpc"
)

func NewMakeReaderClient() (rpc.MakeReaderClient, error) {
	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	conn, err := grpc.Dial(address.MakeReaderAddress, opts...)
	if err != nil {
		return nil, fmt.Errorf("error dialing %s: %w", address.MakeReaderAddress, err)
	}
	defer conn.Close()

	return rpc.NewMakeReaderClient(conn), nil
}
