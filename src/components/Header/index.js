import React, { useState } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core/';
import ReorderIcon from '@material-ui/icons/ReorderOutlined';
import aws from '../../constants';
import styles from './header.css';

const Logo = 'https://igor-jeweler.s3.amazonaws.com/images/logo_i.png';

const Header = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const LINKS = [
    { text:'Home', link: '/' },
    // { text: 'Work samples', link: '/about' },
    { text: 'Contact Us', link: './contact'},
  ];

  const sideList = side => (
    <div
      className={styles.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className={styles.drawer}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo"/>
        </div>
        
        {LINKS.map(({ text, link }) => (
          <ListItem button key={text}>
            <Link to={link}>
              <ListItemIcon />
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  
  return (
    <>
      <div className={styles.big_screen}>
        <div className={styles.logo}>
          <NavLink exact activeClassName={styles.isActive} to='/'>
              <img src={Logo} alt="logo"/>
          </NavLink>
        </div>
        <div className={styles.links}>
          {LINKS.map(({ text, link }) => (
            <NavLink exact activeClassName={styles.isActive} to={link} key={text}>
              <div>
                <span>{text}</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.address}>
          <h3>Hawthorne Jewelry</h3>
          <p>Email: <a href={aws.Email}>{aws.Email2}</a></p>
          <a href={aws.PhoneNumber}><h4>{aws.Phone}</h4></a>
          <p><small>{aws.Address1}</small></p>
          <p><small>{aws.Address2}</small></p>
       </div>
      </div>
      <div className={styles.mobile_only}>
      <Button onClick={toggleDrawer('left', true)}>
        <div className={styles.hamburger}>
          <ReorderIcon fontSize="large"/>
        </div>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      </div>
    </>

  )
}

export default withRouter(Header);
