-- name: GetByID :one
SELECT * FROM phone WHERE id = $1 LIMIT 1;

-- name: GetManyByIDs :many
SELECT * FROM phone WHERE id = ANY($1::bigint[]);

-- name: ListOffset :many
SELECT * FROM phone LIMIT $1 OFFSET $2;

-- name: CountTotal :one
SELECT COUNT(id) FROM phone;
