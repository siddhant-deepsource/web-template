package cursor

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type cursorRequest struct {
	cursor, count int64
}

func (r *cursorRequest) GetCursor() int64 {
	if r == nil {
		return 0
	}

	return r.cursor
}

func (r *cursorRequest) GetCount() int64 {
	if r == nil {
		return 0
	}

	return r.count
}

func TestGetCursorOptions(t *testing.T) {
	tests := []struct {
		name       string
		arg        CursorRequest
		wantCursor int64
		wantCount  int
	}{
		{
			"returns zero cursor and default count for zero request",
			&cursorRequest{
				cursor: 0,
				count:  0,
			},
			0,
			defaultCount,
		},
		{
			"returns cursor and count defined by request",
			&cursorRequest{
				cursor: 123,
				count:  15,
			},
			123,
			15,
		},
		{
			"returns cursor defined by request and default count if count is 0",
			&cursorRequest{
				cursor: 123,
				count:  0,
			},
			123,
			defaultCount,
		},
		{
			"returns cursor defined by request and default count if count is negative",
			&cursorRequest{
				cursor: 123,
				count:  -123,
			},
			123,
			defaultCount,
		},
		{
			"returns cursor defined by request and max count if count is larger than max count",
			&cursorRequest{
				cursor: 123,
				count:  maxCount + 1,
			},
			123,
			maxCount,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotCursor, gotCount := GetCursorOptions(tt.arg)
			assert.Equal(t, tt.wantCursor, gotCursor)
			assert.Equal(t, tt.wantCount, gotCount)
		})
	}
}
