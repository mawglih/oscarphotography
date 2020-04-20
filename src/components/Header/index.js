import React, { useState } from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tabs,
  Tab,
} from '@material-ui/core/';
import ReorderIcon from '@material-ui/icons/Reorder';
import aws from '../../constants';
import styles from './header.css';

const useStyles = makeStyles({
  list: {
    display: 'flex',
    width: 250,
    backgroundColor: '#383ADE',
    color: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  root: {
    flexGrow: 1,
    backgroundColor: '#383ADE',
    height: 100,
  },
});

const Logo = `${aws.root}logo2.png`

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const LINKS = [
    { text:'Home', link: '/' },
    { text: 'What we do', link: '/about' },
    { text: 'Contact us', link: '/contact' },
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
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        >
          <div className={styles.logo}>
            <NavLink exact activeClassName={styles.isActive} to='/'>
                <img src={Logo} alt="logo"/>
            </NavLink>
          </div>
          <div className={styles.links}>
            {LINKS.map(({ text, link }) => (
              <NavLink exact activeClassName={styles.isActive} to={link} key={text}>
                <Tab 
                  label={text} href={link} component={'span'}
                />
              </NavLink>
            ))}
          </div>
        </Tabs>
      </Paper>
      </div>
      <div className={styles.mobile_only}>
      <Button onClick={toggleDrawer('left', true)}>
        <ReorderIcon fontSize="large"/>
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      </div>
    </>

  )
}

export default withRouter(Header);
