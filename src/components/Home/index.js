import React from 'react';
import Image from '../Image';
import Text from '../../constants';
import styles from './home.css';


const Home = () => {
  const IMAGES = [
    {
      image: 'Full/zolotishko.png',
      title: Text.Work1,
      text: Text.Buy1,
      subtext: Text.Buy1short,
      list: Text.Buy2,
      size:"big",
      container:"container2",
    },
    {
      image: 'Full/foto6.png',
      title: Text.Work2,
      text: Text.About1,
      subtext: Text.Short2,
      list: Text.Repairs1,
      size:"big",
      container: "container3",
    },
    {
      image: 'Full/tov2.png',
      title: Text.Work3,
      text: Text.About,
      subtext: Text.Short1,
      list: Text.Battery1,
      size:"big",
      container: "container4",
    },
  ]
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1><span>Hawthorne Jewelry</span> </h1>
          <h2>when only the best will do</h2>
          <h1 className={styles.gold}>WE BUY GOLD!</h1>
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
                list={item.list}
                bold
                container={item.container}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
