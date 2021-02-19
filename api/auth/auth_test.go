package main

import (
	"context"
	"testing"

	auth "github.com/envoyproxy/go-control-plane/envoy/service/auth/v3"
	"github.com/stretchr/testify/assert"
)

func Test_authServer_Check(t *testing.T) {
	tests := []struct {
		name    string
		req     *auth.CheckRequest
		want    *auth.CheckResponse
		wantErr bool
	}{
		{
			"returns anonymous response if no request found",
			nil,
			anonResp(),
			false,
		},
		{
			"returns anonymous response if no attributes found",
			&auth.CheckRequest{},
			anonResp(),
			false,
		},
		{
			"returns anonymous response if no request found",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{},
			},
			anonResp(),
			false,
		},
		{
			"returns anonymous response if no request http found",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{},
				},
			},
			anonResp(),
			false,
		},
		{
			"returns anonymous response if no request http headers found",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{},
					},
				},
			},
			anonResp(),
			false,
		},
		{
			"returns anonymous response if request http headers is empty",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{
							Headers: map[string]string{},
						},
					},
				},
			},
			anonResp(),
			false,
		},
		{
			"returns anonymous response if request no authorization header",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{
							Headers: map[string]string{
								"something": "else",
							},
						},
					},
				},
			},
			anonResp(),
			false,
		},
		{
			"returns unauthenticated response if request authorization header exists but is empty",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{
							Headers: map[string]string{
								"authorization": "",
							},
						},
					},
				},
			},
			unauthenticatedResp(),
			false,
		},
		{
			"returns unauthenticated response if request authorization header exists but is malformed",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{
							Headers: map[string]string{
								"authorization": "wat",
							},
						},
					},
				},
			},
			unauthenticatedResp(),
			false,
		},
		{
			"returns denied response if request authorization header exists but wrong token",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{
							Headers: map[string]string{
								"authorization": "Bearer bad",
							},
						},
					},
				},
			},
			deniedResp(),
			false,
		},
		{
			"returns ok response if request authorization header exists with the right token",
			&auth.CheckRequest{
				Attributes: &auth.AttributeContext{
					Request: &auth.AttributeContext_Request{
						Http: &auth.AttributeContext_HttpRequest{
							Headers: map[string]string{
								"authorization": "Bearer legit",
							},
						},
					},
				},
			},
			okResp(),
			false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			a := &authServer{}
			got, err := a.Check(context.Background(), tt.req)
			if tt.wantErr {
				assert.Error(t, err)
			} else {
				assert.NoError(t, err)
			}
			assert.Equal(t, tt.want, got)
		})
	}
}
