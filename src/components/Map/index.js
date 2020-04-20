import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './map.css';


const MyShop = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '25px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    border:'1px solid white',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const Map = ({ value, shop }) => {
  const defaultPosition = {
    center: {
      lat: 29.589014,
      lng: -81.202043,
    },
    zoom: value
  }
  return (
    <div className={styles.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6Afdu1uPHb71fqbGMGX_OH9Oac_q_Vkk' }}
        defaultCenter={defaultPosition.center}
        defaultZoom={defaultPosition.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
      <MyShop 
          lat={29.589014} 
          lng={-81.202043} 
          text={shop} 
        />
        </GoogleMapReact>
    </div>
  )
}

export default Map;
