import React from 'react';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import text from '../../constants';
import styles from './footer.css';

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.address}>
        <HomeOutlinedIcon/><span> Address: </span>
        <div className={styles.addressText}>
          <p>{text.Address1}</p>
          <p>{text.Address2}</p>
        </div>
      </div>
      <div className={styles.address}>
    <PhoneInTalkOutlinedIcon fontSize="large"/><span> Phone: </span>
        <a href={text.PhoneNumber}>
          <p className={styles.phoneText}>{text.Phone1}</p>
        </a>
      </div>
      <div className={styles.address}>
        <MailOutlineOutlinedIcon/><span><a href={text.Email}>Email us: </a></span>
        <p>{text.Email2}</p>
      </div>
    </div>
    <div className={styles.mobile}>
      <div className={styles.address}>
      <PhoneInTalkOutlinedIcon/><div> Phone: </div>
        <a href={text.PhoneNumber}>
          <div className={styles.phoneText}>{text.Phone1}</div>
        </a>
      </div>
      <div className={styles.address}>
        <HomeOutlinedIcon/><div>Address: </div>
        <div className={styles.addressText}>
          <div>{text.Address1}</div>
          <div>{text.Address2}</div>
        </div>
      </div>
      <div className={styles.address}>
     <MailOutlineOutlinedIcon/><div>Email us: </div>
        <a href={text.Email}>
          <div>{text.Email2}</div>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
