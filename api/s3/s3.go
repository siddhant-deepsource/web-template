package s3

import (
	"os"
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func PresignPutURL(bucket, key, md5 string, expire time.Duration) (string, error) {
	s3Config := &aws.Config{
		Credentials:      credentials.NewStaticCredentials(os.Getenv("MMTK_S3_KEY_ID"), os.Getenv("MMTK_S3_KEY_SECRET"), ""),
		Endpoint:         aws.String("https://s3.us-west-002.backblazeb2.com"),
		Region:           aws.String("us-west-002"),
		S3ForcePathStyle: aws.Bool(true),
	}
	sess := session.New(s3Config)

	s3Client := s3.New(sess)

	req, _ := s3Client.PutObjectRequest(&s3.PutObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(key),
	})

	// req.HTTPRequest.Header.Set("Content-MD5", md5)

	urlStr, err := req.Presign(expire)
	if err != nil {
		return "", err
	}

	return urlStr, nil
}
