package address

const (
	GeneralAPIFQDN    = "localhost"
	GeneralAPIPort    = 50051
	GeneralAPIPortStr = "50051"
	GeneralAPIAddress = GeneralAPIFQDN + ":" + GeneralAPIPortStr

	// all the services have the same port value for now
	MakeAPIFQDN    = GeneralAPIFQDN
	MakeAPIPort    = GeneralAPIPort
	MakeAPIPortStr = GeneralAPIPortStr
	MakeAPIAddress = GeneralAPIAddress

	OSAPIFQDN    = GeneralAPIFQDN
	OSAPIPort    = GeneralAPIPort
	OSAPIPortStr = GeneralAPIPortStr
	OSAPIAddress = GeneralAPIAddress

	PhoneAPIFQDN    = GeneralAPIFQDN
	PhoneAPIPort    = GeneralAPIPort
	PhoneAPIPortStr = GeneralAPIPortStr
	PhoneAPIAddress = GeneralAPIAddress
)
