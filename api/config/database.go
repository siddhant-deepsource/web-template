package config

import (
	"context"
	"database/sql"
	"fmt"
	"os"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/stdlib"
)

func DB(ctx context.Context) (*sql.DB, error) {
	return databaseConnection(ctx, os.Getenv("POSTGRES_HOST")+"/web_template_dev")
}

func databaseConnection(ctx context.Context, url string) (*sql.DB, error) {
	c, err := pgx.ParseConfig(url)
	if err != nil {
		return nil, fmt.Errorf("parsing postgres URI: %w", err)
	}

	db := stdlib.OpenDB(*c)

	go pingDbLoop(ctx, db)

	return db, nil
}

func pingDbLoop(ctx context.Context, db *sql.DB) {
	for {
		err := db.PingContext(ctx)
		if err != nil {
			fmt.Println("PostgreSQL is down", err)
		}

		time.Sleep(100 * time.Millisecond)
	}
}
