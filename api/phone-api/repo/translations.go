package repo

import (
	makePb "github.com/rickypai/web-template/api/protobuf/make"
	"github.com/rickypai/web-template/api/protobuf/os"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func toRPCModel(model dbModelT) *modelT {
	return &modelT{
		Id:   model.ID,
		Name: model.Name,

		Make: &makePb.Make{
			Id: int64(model.MakeID),
		},
		Os: &os.OS{
			Id: int64(model.OsID),
		},

		CreatedAt:  timestamppb.New(model.CreatedAt),
		ModifiedAt: timestamppb.New(model.ModifiedAt),
	}
}

func toRPCModels(models []dbModelT) []*modelT {
	rpcModels := make([]*modelT, len(models))

	for i, model := range models {
		rpcModels[i] = toRPCModel(model)
	}

	return rpcModels
}
