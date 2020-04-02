import React from 'react';
import img from '../../constants/aws';

const index = () => {
  console.log('root', img.root);
  return (
    <div>
      <img src={`${img.root}bar1a.png`} alt="" width="500" />
    </div>
  );
}

export default index;
