package address

const (
	GeneralAPIFQDN    = "localhost"
	GeneralAPIPort    = 50051
	GeneralAPIPortStr = "50051"
	GeneralAPIAddress = GeneralAPIFQDN + ":" + GeneralAPIPortStr

	// all the services have the same port value for now
	MakeReaderFQDN    = GeneralAPIFQDN
	MakeReaderPort    = GeneralAPIPort
	MakeReaderPortStr = GeneralAPIPortStr
	MakeReaderAddress = GeneralAPIAddress

	OSReaderFQDN    = GeneralAPIFQDN
	OSReaderPort    = GeneralAPIPort
	OSReaderPortStr = GeneralAPIPortStr
	OSReaderAddress = GeneralAPIAddress

	PhoneReaderFQDN    = GeneralAPIFQDN
	PhoneReaderPort    = GeneralAPIPort
	PhoneReaderPortStr = GeneralAPIPortStr
	PhoneReaderAddress = GeneralAPIAddress
)
