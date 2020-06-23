import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactLoader from '../Loader';
import aws from '../../constants';
import styles from './images.css';
import SingleImage from '../SingleImage';

const Images = () => {
  const imagePath= `${aws.root}full`;
  const Fotos = ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto1.png', 'foto2.png', 'foto3.png', 'foto4.png'];

  const [idx, setIdx] = useState(0);
  const [items, setItems] = useState(Fotos.slice(0,4));
  const [hasMore, setHasmore] = useState(true);
  const fetchData = () => {
    let ind = idx;
    if(ind + 4 > Fotos.length) {
      setHasmore(false)
      return;
    }
    setTimeout(()=> {
      setItems([...items, ...Fotos.slice(ind, ind+4)]);
      setIdx(idx + 4);
    }, 1500);

  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
       <InfiniteScroll
        className={styles.image}
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<div className={styles.loader}><ReactLoader/></div>}
        endMessage={
          <p className={styles.loader}>
            <b>Yay! You have seen it all</b>
          </p>
        }
       >
         {items.map((image,index) => (
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
//     <div key={item} >
//       <img src={`${imagePath}${item}`} alt={item}/>
//       <h4>name</h4>
//     </div>
//   )
// })}