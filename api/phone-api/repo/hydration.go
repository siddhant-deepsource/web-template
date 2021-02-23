package repo

import (
	"context"
	"fmt"

	makePb "github.com/rickypai/web-template/api/protobuf/make"
	osPb "github.com/rickypai/web-template/api/protobuf/os"
	"golang.org/x/sync/errgroup"
)

type Hydrator struct {
	makeClient makePb.MakeServiceClient
	osClient   osPb.OSServiceClient
}

func NewHydrator(makeClient makePb.MakeServiceClient, osClient osPb.OSServiceClient) *Hydrator {
	return &Hydrator{
		makeClient: makeClient,
		osClient:   osClient,
	}
}

func (h *Hydrator) HydrateOne(ctx context.Context, instance *modelT) error {
	wg, ctx := errgroup.WithContext(ctx)

	var makeResult *makePb.GetOneByIDResponse
	wg.Go(func() error {
		var makeErr error
		makeResult, makeErr = h.makeClient.GetOneByID(ctx, &makePb.GetOneByIDRequest{
			Id: instance.GetMake().GetId(),
		})
		if makeErr != nil {
			return fmt.Errorf("error fetching make ID#%v: %w", instance.GetMake().GetId(), makeErr)
		}

		return nil
	})

	var osResult *osPb.GetOneByIDResponse
	wg.Go(func() error {
		var osErr error
		osResult, osErr = h.osClient.GetOneByID(ctx, &osPb.GetOneByIDRequest{
			Id: instance.GetMake().GetId(),
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os ID#%v: %w", instance.GetMake().GetId(), osErr)
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	instance.Make = makeResult.GetResult()
	instance.Os = osResult.GetResult()

	return nil
}

func (h *Hydrator) HydrateMany(ctx context.Context, instances []*modelT) error {
	// TODO: more efficient calls
	for i := range instances {
		err := h.HydrateOne(ctx, instances[i])
		if err != nil {
			return err
		}
	}

	return nil
}
