import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitFormStart, clearForm, } from '../../store/forms/forms.actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '../Modal';
import cn from 'classnames';
import styles from './ContactForm.css';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      minWidth: 250,
    },
  },
}));

const ContactForm = ({
  status,
}) => {
  const dispatch = useDispatch();
  const actions = useMemo(
		() =>
			bindActionCreators(
				{
          sendmessage: submitFormStart,
          clear: clearForm,
				},
				dispatch,
			),
		[],
	);
  const classes = useStyles();
  const submitForm = e => {
    e.preventDefault()
    console.log('data: ', values);
    actions.sendmessage(values);
    status = true;
    actions.clear();
    setValues({ userName: '', userEmail: '', userText: '', userSubject: '', })
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const [values, setValues] = useState({ userName: '', userEmail: '', userText: '', userSubject: '', })
  return(
    <form
      onSubmit={submitForm} 
      className={cn(
        classes.root,
        styles.form,
      )}
      >
      <span>Contact us</span>
      <TextField
        variant="outlined"
        label="Enter your name"
        type="text"
        value={values.userName}
        onChange={handleInputChange}
        name="userName"
      />
      <TextField
        variant="outlined"
        label="What are you intersted in"
        type="text"
        value={values.userSubject}
        onChange={handleInputChange}
        name="userSubject"
        placeholder="Upholstery, Awnings, etc"
      />
      <TextField
        variant="outlined"
        label="Enter your email"
        type="email"
        value={values.userEmail}
        onChange={handleInputChange}
        name="userEmail"
      />
      <TextField
        variant="outlined"
        label="Enter your message"
        type="textarea"
        value={values.userText}
        onChange={handleInputChange}
        name="userText"
        multiline
        rows="10"
      />
      <Button variant="contained" color="primary" onClick={submitForm}>
        Submit
      </Button>
    </form>
  )
}

export default ContactForm;
