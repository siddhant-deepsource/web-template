package repo

import (
	dbModel "github.com/rickypai/web-template/api/dbmodels/os"
	rpc "github.com/rickypai/web-template/api/protobuf/os"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT   = rpc.OS
	dbModelT = dbModel.OS
)
