package repo

import (
	"context"
	"database/sql"
	"fmt"

	makePb "github.com/rickypai/web-template/api/protobuf/make"
	osPb "github.com/rickypai/web-template/api/protobuf/os"
	cursorPkg "github.com/rickypai/web-template/api/server/cursor"
)

type HydratedRepo struct {
	repo     *Repo
	hydrator *Hydrator
}

func NewHydratedRepo(db *sql.DB, makeClient makePb.MakeServiceClient, osClient osPb.OSServiceClient) *HydratedRepo {
	return &HydratedRepo{
		repo:     NewRepo(db),
		hydrator: NewHydrator(makeClient, osClient),
	}
}

func (r *HydratedRepo) ListByPage(ctx context.Context, req cursorPkg.PageRequest) ([]*modelT, *cursorPkg.PageResult, error) {
	results, pageResult, err := r.repo.ListByPage(ctx, req)
	if err != nil {
		return nil, nil, err
	}

	err = r.hydrator.HydrateMany(ctx, results)
	if err != nil {
		return nil, nil, fmt.Errorf("hydrating: %w", err)
	}

	return results, pageResult, nil
}

func (r *HydratedRepo) ListByCursor(ctx context.Context, req cursorPkg.CursorRequest) ([]*modelT, *cursorPkg.CursorResult, error) {
	results, cursorResult, err := r.repo.ListByCursor(ctx, req)
	if err != nil {
		return nil, nil, err
	}

	err = r.hydrator.HydrateMany(ctx, results)
	if err != nil {
		return nil, nil, fmt.Errorf("hydrating: %w", err)
	}

	return results, cursorResult, nil
}

func (r *HydratedRepo) GetOneByID(ctx context.Context, id int64) (*modelT, error) {
	result, err := r.repo.GetOneByID(ctx, id)
	if err != nil {
		return nil, err
	}

	err = r.hydrator.HydrateOne(ctx, result)
	if err != nil {
		return nil, fmt.Errorf("hydrating: %w", err)
	}

	return result, nil
}

func (r *HydratedRepo) GetManyByIDs(ctx context.Context, ids []int64) ([]*modelT, error) {
	results, err := r.repo.GetManyByIDs(ctx, ids)
	if err != nil {
		return nil, err
	}

	err = r.hydrator.HydrateMany(ctx, results)
	if err != nil {
		return nil, fmt.Errorf("hydrating: %w", err)
	}

	return results, nil
}
