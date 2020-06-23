import React from 'react';
import styles from './singleimage.css';

const SingleImage = ({
  url,
  name,
}) => {
  return (
    <div className={styles.image}>
      <img src={`${url}/${name}`} alt={name} />
    </div>
  )
}

export default SingleImage;
