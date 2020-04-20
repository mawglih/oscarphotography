import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import { Link } from '@material-ui/core';
import text from '../../constants';
import styles from './footer.css';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: 'rgb(8, 8, 153)'
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Paper square className={classes.root}>
        <Tabs
          variant="fullWidth"
          className={styles.tabs}
        >
          
          <Tab icon={<HomeOutlinedIcon />}  label={text.Address2} />
          <Tab icon={<PhoneIcon />} label={text.Phone}>
            <Link href={text.PhoneNumber} />
          </Tab>
          <Tab icon={<MailOutlineOutlinedIcon />} label="Email us">
            <Link href={text.Email} />
          </Tab>
        </Tabs>
      </Paper>
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
          <MailOutlineOutlinedIcon/><span><a href={text.Email}>Email us</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
