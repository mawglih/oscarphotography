import React from 'react';
import aws from '../../constants';

const AllFotos = ({
  classname1,
  classname2,
  onImageClick,
}) => {
  const imagePath = aws.root;
  const Images = aws.fotos.map((image, ind) => {
    return (
      <div key={ind} className={classname2} onClick={() => onImageClick(image)}>
        <img src={`${imagePath}${image}.png`} alt={image} />
      </div>
    )
  })
  return(
    <div className={classname1}>
      {Images}
    </div>
  )
};
export default AllFotos;
