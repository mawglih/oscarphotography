import React from 'react';
import styles from './infotext.css';

const InfoText = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className={styles.column}>
      <div className={styles.title}>
        {icon}
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default InfoText;
