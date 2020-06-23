import React from 'react';
import AWS from 'aws-sdk';
import Images from '../Images';
import styles from './home.css';

const Home = () => {
  // Initialize the Amazon Cognito credentials provider
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:7dc877a2-7255-4f95-a565-15c4cda076da',
  });
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'oscarphoto-images',Prefix: 'front/', StartAfter: 'front/'}
  });
s3.listObjectsV2(function (err, data) {
    if(err)throw err;
    const Fotos = [];
    for (let item of data.Contents) {
      Fotos.push(item.Key);
    }
    console.log('Fotos', Fotos)
    console.log(data.Contents);
   });
  
  return (
    <>
      <div className={styles.container}>  
        <Images/>
      </div>
    </>
  );
}

export default Home;
