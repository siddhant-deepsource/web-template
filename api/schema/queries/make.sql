-- name: GetByID :one
SELECT * FROM make WHERE id = $1 LIMIT 1;

-- name: ListOffset :many
SELECT * FROM make LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM make;
