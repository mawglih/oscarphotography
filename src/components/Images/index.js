import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import aws from '../../constants';
import styles from './images.css';
import SingleImage from '../SingleImage';

const Images = () => {
  const imagePath= `${aws.root}full`;
  const Fotos = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png']
  return (
    <div className={styles.container}>
      <div className={styles.content}>
       <InfiniteScroll
        dataLength={Fotos}
       >
         {Fotos.map((image,index) => (
           <SingleImage
            url={imagePath}
            key={index}
            name={image}
           />
         ))}
       </InfiniteScroll>
      </div>
    </div>
  )
}
export default Images;

// {Fotos.map(item => {
//   return (
//     <div key={item} className={styles.image}>
//       <img src={`${imagePath}${item}`} alt={item}/>
//       <h4>name</h4>
//     </div>
//   )
// })}