-- name: GetByID :one
SELECT * FROM os WHERE id = $1 LIMIT 1;

-- name: ListOffset :many
SELECT * FROM os LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM os;
