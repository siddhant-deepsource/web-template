package repo

import (
	"context"
	"fmt"

	makePb "github.com/rickypai/web-template/api/protobuf/make"
	osPb "github.com/rickypai/web-template/api/protobuf/os"
	"golang.org/x/sync/errgroup"
)

type Hydrator struct {
	makeClient makePb.MakeReaderClient
	osClient   osPb.OSReaderClient
}

func NewHydrator(makeClient makePb.MakeReaderClient, osClient osPb.OSReaderClient) *Hydrator {
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
			Id: instance.GetOs().GetId(),
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os ID#%v: %w", instance.GetOs().GetId(), osErr)
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
	wg, ctx := errgroup.WithContext(ctx)

	makeResults := make(map[int64]*makePb.Make, len(instances))
	wg.Go(func() error {
		makeIds := make([]int64, len(instances))
		for i, instance := range instances {
			makeIds[i] = instance.GetMake().GetId()
		}

		makesResponse, makeErr := h.makeClient.GetManyByIDs(ctx, &makePb.GetManyByIDsRequest{
			Ids: makeIds,
		})
		if makeErr != nil {
			return fmt.Errorf("error fetching make IDs#%+v: %w", makeIds, makeErr)
		}

		for _, result := range makesResponse.GetResults() {
			makeResults[result.GetId()] = result
		}

		return nil
	})

	osResults := make(map[int64]*osPb.OS, len(instances))
	wg.Go(func() error {
		osIds := make([]int64, len(instances))
		for i, instance := range instances {
			osIds[i] = instance.GetOs().GetId()
		}

		ossResponse, osErr := h.osClient.GetManyByIDs(ctx, &osPb.GetManyByIDsRequest{
			Ids: osIds,
		})
		if osErr != nil {
			return fmt.Errorf("error fetching os IDs#%+v: %w", osIds, osErr)
		}

		for _, result := range ossResponse.GetResults() {
			osResults[result.GetId()] = result
		}

		return nil
	})

	err := wg.Wait()
	if err != nil {
		return err
	}

	for _, instance := range instances {
		instance.Make = makeResults[instance.GetMake().GetId()]
		instance.Os = osResults[instance.GetOs().GetId()]
	}

	return nil
}
