import React, { useState, useEffect } from 'react';
import Map from '../Map';
import Upholstery from '../Upholstery';
import Image from '../Image';
import styles from './home.css';
import Modal from '../Modal';

const Home = () => {
  const IMAGES = [
    {
      image: 'enc_main',
      title: 'Enclosures',
      text: 'We fix and build all possible enclosures for boats',
      size: 'big',
    },
    {
      image: 'otf_main',
      title: 'Floor',
      text: 'We fix and build all possible floors for boats',
      size: 'big',
    },
    {
      image: 'uph_main',
      title: 'Upholstery',
      text: 'We fix and build all possible upholsterys for boats',
      size: 'big',
    },
  ]
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Alphamarineupholstery - your best boat renovation shop</h1>
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
              />
            )
          })}
        </div>
        <div className={styles.row}>
          <div className={styles.map}>
            <Map
              value={17}
              shop="AlphaMarineUpholstery"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
