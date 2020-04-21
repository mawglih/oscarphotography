import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearForm, } from '../../store/forms/forms.actions';
import Spinner from '../Spinner';
import ContactForm from '../ContactForm';
import Map from '../Map';
import styles from './ContactUs.css';
import Modal from '../Modal';
import Contacts from '../Contacts';

const Status = data => {
  if (data) {
  return <h1>Message submitted successfully</h1>
  }
}

const ContactUs = () => {
  const dispatch = useDispatch();
  const actions = useMemo(
		() =>
			bindActionCreators(
				{
          clear: clearForm,
				},
				dispatch,
			),
		[],
	);
  const { loading, data, } = useSelector(state => state.forms);
  const [modalOpen, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(false);
    return () => actions.clear();
  }, [actions]);
  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <ContactForm status={setOpenModal} />
      </div>
      <div className={styles.row}>
        <Contacts />
        <div className={styles.map}>
          <Map value={15} shop="Alpha Marine Upholstery"/>
        </div>
      </div>
      {data && data.userEmail &&  <Status status={data} />}
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
