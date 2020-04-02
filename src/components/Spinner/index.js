import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './Spinner.css';

const Spinner = ({
  type,
  color,
  height,
  width,
  timeout,
}) => {
  console.log('spinner')
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout} //3 secs
    />
  );
};

export default Spinner;
