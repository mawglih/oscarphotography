import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import text from '../../constants';
import styles from './Contacts.css';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <h2><HomeIcon/> Our address</h2>
      <h3 className={styles.first}>{text.Address1}</h3>
      <h3 className={styles.second}>{text.Address2}</h3>
      <a href={text.PhoneNumber} className={styles.phone}>
        <h2><CallIcon/> {text.Phone}</h2>
      </a>
    </div>
  )
}

export default Contacts;
