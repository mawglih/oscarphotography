import React from 'react';
import styles from './singleimage.css';

const SingleImage = ({
  url,
  key,
  name,
}) => {
  return (
    <div className={styles.image} key={key}>
      <img src={`${url}/${name}`} alt={name} />
    </div>
  )
}

export default SingleImage;
