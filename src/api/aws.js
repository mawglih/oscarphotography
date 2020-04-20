import AWS from 'aws-sdk';

const s3 = new AWS.S3();
const params = {
  Bucket: 'arn:aws:s3:us-east-2:202717464391:accesspoint/getfotosnames',
  MaxKeys: 100,
}
export default {
  aws: () => {
    s3.listObjectsV2(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}
};

