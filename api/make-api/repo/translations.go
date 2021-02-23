package repo

import (
	"google.golang.org/protobuf/types/known/timestamppb"
)

func toRPCModel(model dbModelT) *modelT {
	return &modelT{
		Id:   model.ID,
		Name: model.Name,

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
