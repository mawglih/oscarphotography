import React from 'react';
import Map from '../Map';
import Image from '../Image';
import Text from '../../constants';
import styles from './home.css';


const Home = () => {
  const IMAGES = [
    {
      image: 'front/enc_main.png',
      title: 'Enclosures',
      text: Text.About2,
      size: 'big',
      subtext: Text.Short3,
    },
    {
      image: 'front/furn_main.png',
      title: 'Outdoor furniture',
      text: Text.About1,
      size: 'big',
      subtext: Text.Short2,
    },
    {
      image: 'front/uph_main.png',
      title: 'Boat cushions',
      text: Text.About,
      size: 'big',
      subtext: Text.Short1,
    },
  ]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1><span>Zolotishko ot Igorka</span> </h1>
          <h2>the best ***ing jeweler on Diamond street</h2>
        </div>
        <div className={styles.hero}></div>
        
        <div className={styles.row}>
          {IMAGES.map((item, index) => {
            return (
              <Image
                key={index}
                image={item.image}
                title={item.title}
                text={item.text}
                size={item.size}
                color="black"
                subText={item.subtext}
              />
            )
          })}
        </div>
        <div className={styles.row}>
          <div className={styles.map}>
            <Map
              value={17}
              shop="Alpha Marine Upholstery"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
