package repo

import (
	dbModel "github.com/rickypai/web-template/api/dbmodels/make"
	rpc "github.com/rickypai/web-template/api/protobuf/make"
)

// this is as close as we can get without generics. Just modify this one line to change the model in question
type (
	modelT   = rpc.Make
	dbModelT = dbModel.Make
)
