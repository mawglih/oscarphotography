import React from 'react';
import Text from '../../constants';
import styles from './whatwedo.css';

const WhatWeDo = () => (
  <div className={styles.container}>
    <h1>What we can do for you</h1>
    <h3>{Text.About3}</h3>
  </div>
);

export default WhatWeDo;
