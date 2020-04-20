import React from 'react';
import cn from 'classnames';
import aws from '../../constants';
import Avatar from '../Avatar';
import styles from './slide.css';

const Slide = ({
  title,
  image,
  text,
  moto,
  rozha,
  color,
}) => {
  const avatar = `${aws.root}${rozha}.png`;
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.content}>
        
        <div className={styles.image}>
          <img src={`${aws.root}front/${image}`} alt="mainimage" />
        </div>
        <div className={cn(
          styles.column,
          styles[color]
        )}>
          <div className={styles.mainText}>
            <p>{text}</p>
          </div>
          <div className={styles.moto}>
            <p>{moto}</p>
            <Avatar image={avatar} />
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Slide;
