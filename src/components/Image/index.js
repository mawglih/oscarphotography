import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import styles from '../Home/home.css';

const url = 'https://amu-images.s3.us-east-2.amazonaws.com/front/';

const Image = ({
  image,
  title,
  text,
  size,
}) => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() =>{
    setOpenModal(false);
  },[]);
  console.log('modalopen: ', openModal);
  return (
    <>
    <div className={styles.image} onClick={() => setOpenModal(true)}>
      <img src={`${url}${image}.png`} alt={text} />
    </div>
    <Modal 
      title={title}
      size={size}
      text={text}
      open={openModal}
      showCloseButton
      modalDismiss={() => setOpenModal(false)}
    >
      <div className={styles.image}>
        <img src={`${url}${image}.png`} alt={text}/>
      </div>
    </Modal>
    </>
  )
}

export default Image;
