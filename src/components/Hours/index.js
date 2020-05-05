import React from 'react';
import styles from './hours.css';
import aws from '../../constants';

const Hours = ({
  icon,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          {icon}
          <h1>Hours</h1>
        </div>
        <span>{aws.Hours}</span>
      </div>
    </div>
  )
}

export default Hours;
