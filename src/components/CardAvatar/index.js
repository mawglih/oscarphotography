import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import ImageAvatar from '../Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardAvatar = ({
  text,
  image,
  alt,
  title,
  subheader,
  comp,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <ImageAvatar image={image} text={alt} />
        }
       
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography variant={comp} color="textSecondary" component={comp}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}
 export default CardAvatar;
