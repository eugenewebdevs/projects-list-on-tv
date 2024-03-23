import json
import boto3

def lambda_handler(event, context):
    
    # Create an S3 client
    s3 = boto3.client('s3')
    data = str(event)
    
    # Put the JSON data in the S3 bucket
    s3.put_object(Bucket='newton-list-bucket', Key='my-file.json', Body=data)

    return {
        'statusCode': 200,
        'body': data
    }
