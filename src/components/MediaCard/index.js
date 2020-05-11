import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import aws from '../../constants';
import styles from './MediaCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 385,
    height: 470,
  },
  media: {
    height: 300,
  },
});

const MediaCard = ({
  title,
  text,
  image,
  open,
  size,
  list,
  bold,
}) => {
  const classes = useStyles();

  return (
    <Card className={styles[size]}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${aws.root}${image}`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {title}
          </Typography>
          <Typography variant="span" color="textSecondary" component="p">
            <span className={cn( bold ? styles.bold : null)}>{text}</span>
            {list && (<ul className={styles.list}>
              {list.map((i, ind)=> (
                <li key={ind} className={cn( bold ? styles.bold : null)}>
                  {i}
                </li>
              ))}
            </ul>)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary" href="/contact">
          Contact us
        </Button>
        {open && <Button size="big" color="primary" onClick={open}>
          Learn More
        </Button>}
      </CardActions>
    </Card>
  );
}

export default MediaCard;
