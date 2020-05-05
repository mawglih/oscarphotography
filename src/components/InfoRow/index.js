import React from 'react';
import cn from 'classnames';
import aws from '../../constants';
import styles from './inforow.css';

const InfoRow = ({
  title,
  text,
  image,
  reverse,
  icon,
  children,
}) => {
  return (
    <div className={cn(
      reverse ? styles.reverse : styles.container,
      )}>
      <div className={styles.column}>
        <div className={styles.title}>
          {icon}
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
        {children}
      </div>
      <div className={styles.image}>
        <img src={aws.root+image} alt={title} />
      </div>
    </div>
  )
}

export default InfoRow;
