import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import CardAvatar from '../CardAvatar';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import MediaCard from '../MediaCard';
import Button from '@material-ui/core/Button';
import ImageAvatar from '../Avatar';
import aws from '../../constants';
import styles from '../Home/home.css';
import styles2 from './Image.css';

const avatar = `${aws.root}thumbs/small-magaz.png`;
const moto = "when only the best will do";
const AllButtons = () => (
  <>
    <div className={styles2.button}>
      <Button 
        size="big"
        color="tertiary"
        href={aws.Email}
        startIcon={<MailOutlineOutlinedIcon size="big" color="tertiary" />}
      >
        Email us directly
      </Button>
    </div>
    <div className={styles2.button}>
      <Button 
        size="big"
        color="tertiary"
        href={aws.PhoneNumber}
        startIcon={<PhoneInTalkOutlinedIcon size="big" color="tertiary" />}
      >
      Call us: {aws.Phone1}
      </Button>
    </div>
  </>
);

const IpadContent = ({
  image,
  title,
  text,
}) => (
  <div className={styles2.ipadContainer}>
    <div className={styles2.ipadImage}>
      <img src={aws.root + image} alt={title} />
    </div>
    <div className={styles2.ipadText}>
      <span>{text}</span>
    </div>
  </div>
)

const Image = ({
  image,
  title,
  text,
  size,
  subText,
  color,
  list,
  bold,
  container,
}) => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() =>{
    setOpenModal(false);
  },[]);
  const Content = () => (
    <div className={styles2.content}>
      <div className={styles2.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles2.main}>
        <div className={styles2.card}>
          <MediaCard
            image={image}
            text={text}
            size={container}
            list={list}
            bold={bold}
          />
        </div>
        <div className={styles2.ipadContent}>
          <IpadContent 
            image={image}
            text={text}
            title={title}
          />
        </div>
        <div className={styles2.items}>
          <CardAvatar
            image={avatar}
            alt="taran"
            text={moto}
            comp="h5"
          />
          <AllButtons />
        </div>
      </div>
    </div>
  );
  return (
    <>
    <div className={styles.image} onClick={() => setOpenModal(true)}>
      <MediaCard
        image={image}
        title={title}
        text={subText}
        open={() => setOpenModal(true)}
        size={container}
      />
  
    </div>
    <Modal 
      size={size}
      open={openModal}
      showCloseButton
      modalDismiss={() => setOpenModal(false)}
    >
      <div className={styles2.mobileOnly}>
        <ImageAvatar image={avatar} />
        <div className={styles2.mobileText}>{text}</div>
        <h2>To learn more:</h2>
        <div>
          <AllButtons />
        </div>
      </div>
      <Content/>
    </Modal>
    </>
  )
}

export default Image;
