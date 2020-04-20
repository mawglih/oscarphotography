import React from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './Avatar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const ImageAvatar = ({
  image,
  text,
  classType
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt={text}
        src={image}
        className={cn( classType ? styles[classType] : classes.large )} 
      />
    </div>
  );
}
export default ImageAvatar;
