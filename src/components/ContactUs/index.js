import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import ContactForm from '../ContactForm';
import Map from '../Map';
import styles from './ContactUs.css';
import Modal from '../Modal';

const Status = data => {
  if (data) {
  return <h1>Message submitted successfully</h1>
  }
}

const ContactUs = () => {
  const { loading, data, } = useSelector(state => state.forms);
  const [modalOpen, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(false);

  }, []);
  return(
    <div className={styles.container}>
      {/* <MailchimpSubscribe url={url}/> */}
      {loading ? (
        <Spinner
          type="Rings"
          color="#383ADE"
          height={100}
          width={100}
          timeout={3000}
      />
      ) : (<ContactForm status={setOpenModal} />)}
      {data && data.userEmail &&  <Status status={data} />}
      <div className={styles.map}>
        <Map value={15} shop="We are here"/>
      </div> 
     <Modal
        title='small'
        text={data ? data.userMessage : ''}
        open={modalOpen}
        showCloseButton
        modalDismiss={() => setOpenModal(false)}
      />

    </div>
  );
}

export default ContactUs;
