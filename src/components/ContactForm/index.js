import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitFormStart, clearForm, } from '../../store/forms/forms.actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import cn from 'classnames';
import styles from './ContactForm.css';


const Selection = [
  'Upholstery',
  'Furniture',
  'Enclosure'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


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
		[dispatch],
	);
  const classes = useStyles();
  const submitForm = e => {
    e.preventDefault()
    actions.sendmessage(values);
    status = true;
    actions.clear();
    setValues({ userName: '', userEmail: '', userPhone: '', userText: '', userSubject: '', userOptions: [], })
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ userName: '', userEmail: '', userPhone: '', userText: '', userSubject: '', userOptions: [], });

  const [userOption, setUserOptions] = useState([]);

  const handleChange = event => {
    const { value } = event.target;
    setUserOptions(value);
    setValues({ ...values, userOptions: value });
  }

  return(
    <div className={styles.container}>
      <form
        onSubmit={submitForm} 
        className={cn(
          classes.root,
          styles.form,
        )}
        >
        <h1 className={styles.title}>Contact us</h1>
        <TextField
          variant="outlined"
          label="Enter your name"
          type="text"
          value={values.userName}
          onChange={handleInputChange}
          name="userName"
          color="scondary"
          size="medium"
        />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="chip-label">Select subject</InputLabel>
        <Select
          labelId="chip-label"
          id="chip"
          multiple
          value={userOption}
          onChange={handleChange}
          input={<Input id="chip" />}
          renderValue={(selected) => (
            <div className={[classes.chips, styles.chip]}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {Selection.map((name) => (
            <MenuItem key={name} value={name} style={styles.menuItem}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        <TextField
          variant="outlined"
          label="What are you intersted in"
          type="text"
          value={values.userSubject}
          onChange={handleInputChange}
          name="userSubject"
          placeholder="Upholstery, Awnings, etc"
          color="scondary"
          size="medium"
        />
        <TextField
          variant="outlined"
          label="Enter your email"
          type="email"
          value={values.userEmail}
          onChange={handleInputChange}
          name="userEmail"
          color="scondary"
          size="medium"
        />
        <TextField
          variant="outlined"
          label="Enter your phone"
          type="text"
          value={values.userPhone}
          onChange={handleInputChange}
          name="userPhone"
          color="scondary"
          size="medium"
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
          color="scondary"
          size="medium"
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={submitForm}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm;
