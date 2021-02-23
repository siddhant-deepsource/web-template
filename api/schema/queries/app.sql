-- name: GetByID :one
SELECT * FROM app WHERE id = $1 LIMIT 1;

