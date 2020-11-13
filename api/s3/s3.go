package s3

import (
	"time"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func PresignPutURL(bucket, key, md5 string, expire time.Duration) (string, error) {
	s3Config := &aws.Config{
		Endpoint:         aws.String("https://s3.us-west-2.amazonaws.com"),
		Region:           aws.String("us-west-2"),
		S3ForcePathStyle: aws.Bool(true),
	}
	sess := session.New(s3Config)

	s3Client := s3.New(sess)

	req, _ := s3Client.PutObjectRequest(&s3.PutObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(key),
	})

	urlStr, _, err := req.PresignRequest(expire)
	if err != nil {
		return "", err
	}

	return urlStr, nil
}
