package server

import (
	rpc "github.com/rickypai/web-template/api/protobuf/os"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT = *rpc.OS
	rpcT   = rpc.UnimplementedOSReaderServer
)

const (
	modelName  = "OS"
	modelsName = "OSs"
)
