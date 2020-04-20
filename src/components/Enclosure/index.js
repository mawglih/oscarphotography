import React, { useEffect, useState } from 'react';
import styles from './Enclosure.css';
import AllPhotos from '../AllFotos';
import WhatWeDo from '../WhatWeDo';
import CardImage from '../CardImage';
import Modal from '../Modal';

const Enclosure = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [text, setText] = useState('');
  const [button, setButton] = useState('');
  const [arrow, setArrow] = useState(true);
  useEffect(() => {
    setModalOpen(false);
  }, []);
  const onImageClick = img => {
    setModalOpen(true);
    console.log('image: ', img);
    setImagePath(img);
    setText(imageName(img));
    console.log('text: ', text);
  };
  const imageName = img => {
    const lastLetter = img.split('').slice(-1)[0];
    console.log('last letter', lastLetter);
    if(lastLetter === 'a') {
      setButton('After');
      setArrow(true);
      return 'before';
    }
    else if(lastLetter === 'b') {
      setButton('Before')
      setArrow(false);
      return 'after';
    }
    setButton('');
    return '';
  };

  const onButtonClick = () => {
    setArrow(!arrow);
    button === 'After' ? setButton('Before') : setButton('After');
    text === 'after' ? setText('before') : setText('after');
    const char = imagePath.split('').pop();
    const str = imagePath.slice(0, -1);
    char === 'a'? setImagePath(str + 'b') : setImagePath(str + 'a');
  };

  return(
    <div className={styles.container}>
      <WhatWeDo />
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
        button={button}
        arrow={arrow}
      >
        <CardImage
          image={imagePath}
          arrow={arrow}
          button={button}
          click={onButtonClick}

        />
      </Modal>
    </div>
  );
}

export default Enclosure;
