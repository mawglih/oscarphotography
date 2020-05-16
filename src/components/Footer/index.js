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
        
      </div>
      <div className={styles.address}>
    <PhoneInTalkOutlinedIcon fontSize="large"/><span> Phone: </span>
        <a href={text.PhoneNumber}>
         
        </a>
      </div>
      <div className={styles.address}>
        <MailOutlineOutlinedIcon/><span><a href={text.Email}>Email us: </a></span>
      
      </div>
    </div>
    <div className={styles.mobile}>
      <div className={styles.address}>
      <PhoneInTalkOutlinedIcon/><div> Phone: </div>
       
      </div>
      <div className={styles.address}>
        <HomeOutlinedIcon/><div>Address: </div>
        
      </div>
      <div className={styles.address}>
     <MailOutlineOutlinedIcon/><div>Email us: </div>
       
      </div>
    </div>
  </div>
);

export default Footer;
