package main

import (
	"context"
	"log"
	"strings"

	core "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	auth "github.com/envoyproxy/go-control-plane/envoy/service/auth/v3"
	envoy_type "github.com/envoyproxy/go-control-plane/envoy/type/v3"
	"google.golang.org/genproto/googleapis/rpc/code"
	rpcstatus "google.golang.org/genproto/googleapis/rpc/status"
)

const (
	bearerPrefix = "Bearer "
)

type authServer struct{}

func (a *authServer) Check(ctx context.Context, req *auth.CheckRequest) (*auth.CheckResponse, error) {
	log.Printf("Inbound Headers: %+v", req.GetAttributes().GetRequest().GetHttp().GetHeaders())
	log.Printf("Context Extensions: %+v", req.GetAttributes().GetContextExtensions())

	headers := req.GetAttributes().GetRequest().GetHttp().GetHeaders()
	if headers == nil {
		return anonResp(), nil
	}

	authHeader, ok := headers["authorization"]
	if !ok {
		return anonResp(), nil
	}

	if !strings.HasPrefix(authHeader, bearerPrefix) {
		return unauthenticatedResp(), nil
	}

	parts := strings.Split(authHeader, bearerPrefix)
	if len(parts) != 2 {
		return unauthenticatedResp(), nil
	}

	// TODO: implement actual check against data source
	token := parts[1]
	if token == "legit" {
		return okResp(), nil
	}

	return deniedResp(), nil
}

func anonResp() *auth.CheckResponse {
	return &auth.CheckResponse{
		Status: &rpcstatus.Status{
			Code: int32(code.Code_OK),
		},
		HttpResponse: &auth.CheckResponse_OkResponse{
			OkResponse: &auth.OkHttpResponse{
				Headers: []*core.HeaderValueOption{
					{
						Header: &core.HeaderValue{
							Key:   "x-custom-header-from-authz",
							Value: "some value",
						},
					},
				},
			},
		},
	}
}

func okResp() *auth.CheckResponse {
	return &auth.CheckResponse{
		Status: &rpcstatus.Status{
			Code: int32(code.Code_OK),
		},
		HttpResponse: &auth.CheckResponse_OkResponse{
			OkResponse: &auth.OkHttpResponse{
				Headers: []*core.HeaderValueOption{
					{
						Header: &core.HeaderValue{
							Key:   "x-custom-header-from-authz",
							Value: "some value",
						},
					},
				},
			},
		},
	}
}

func deniedResp() *auth.CheckResponse {
	return &auth.CheckResponse{
		Status: &rpcstatus.Status{
			Code: int32(code.Code_PERMISSION_DENIED),
		},
		HttpResponse: &auth.CheckResponse_DeniedResponse{
			DeniedResponse: &auth.DeniedHttpResponse{
				Status: &envoy_type.HttpStatus{
					Code: envoy_type.StatusCode_Unauthorized,
				},
				Body: "PERMISSION_DENIED",
			},
		},
	}
}

func unauthenticatedResp() *auth.CheckResponse {
	return &auth.CheckResponse{
		Status: &rpcstatus.Status{
			Code: int32(code.Code_UNAUTHENTICATED),
		},
		HttpResponse: &auth.CheckResponse_DeniedResponse{
			DeniedResponse: &auth.DeniedHttpResponse{
				Status: &envoy_type.HttpStatus{
					Code: envoy_type.StatusCode_Unauthorized,
				},
				Body: "Authorization Header malformed or not provided",
			},
		},
	}
}
