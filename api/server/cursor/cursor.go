package cursor

type CursorRequest interface {
	GetCursor() int64
	GetCount() int64
}

type CursorResult struct {
	Cursor int64
}

const (
	defaultCount = 20
	maxCount     = 100
)

func GetCursorOptions(req CursorRequest) (cursor int64, count int) {
	cursor = req.GetCursor()
	count = int(req.GetCount())
	if count < 1 {
		count = defaultCount
	} else if count > maxCount {
		count = maxCount
	}

	return cursor, count
}
