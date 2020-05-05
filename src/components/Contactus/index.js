import React from 'react';
import InfoRow from '../InfoRow';
import aws from '../../constants';
import Hours from '../Hours';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Address from '../Address';
import styles from './contactus.css';
import InfoText from '../InfoText';

const Contactus = () => {
  return (
    <div className={styles.container}>
      <InfoRow 
        image="Full/magaz1.png"
      >
        <InfoText
          text={aws.Sell1}
          title="We buy gold"
          icon={<MonetizationOnOutlinedIcon/>}
        />
      </InfoRow>
      <InfoRow
        image="Full/magaz2.png"
        reverse
      >
        <Address />
      </InfoRow>
      <InfoRow
        image="Full/tov3.png"
      >
        <InfoText
          text={aws.Callus1}
          title="Contact us"
          icon={<NotificationsActiveOutlinedIcon />}
        />
        <Hours
          icon={<WatchLaterOutlinedIcon/>}
        />
      </InfoRow>
  </div>
  )
}

export default Contactus;
