import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ReactLoader = () => (
  <Loader
    type="ThreeDots"
    color="#d8b192"
    height={100}
    width={100}
    timeout={3000} 
  />
);

export default ReactLoader;
