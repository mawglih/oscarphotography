import React, { useEffect, useState } from 'react';
import styles from './Enclosure.css';
import AllPhotos from '../AllFotos';
import aws from '../../constants';
import Modal from '../Modal';

const Enclosure = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [text, setText] = useState('');
  useEffect(() => {
    setModalOpen(false);
  }, []);
  const onImageClick = img => {
    setModalOpen(true);
    console.log('image: ', img);
    setImagePath(img);
    setText(imageName(img));
  };
  const imageName = img => {
    const lastLetter = img.split('').slice(-1)[0];
    console.log('last letter', lastLetter);

    if( lastLetter=== 'a') return 'before';
    return 'after';
  }
  return(
    <>
      <AllPhotos
        classname1={styles.list}
        classname2={styles.listItem}
        onImageClick={onImageClick}
        image
      />
      <Modal
        open={modalOpen}
        modalDismiss={() => setModalOpen(false)}
        showCloseButton
        size='large'
        titleClass='titleBig'
        title={text}
      >
        <img src={`${aws.root}${imagePath}.png`} alt={imagePath} className={styles.imageBig} />
      </Modal>
    </>
  );
}

export default Enclosure;
