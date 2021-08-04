import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 605,
    height: 500,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


 // The example data is structured as follows:
 
  //import image from 'path/to/image.jpg';
  //[etc...]
 
  const itemData = [
    {
      img: 'url(https://unsplash.com/photos/5rsNohd8bY8)',
      title: 'Image',
      author: 'author',
    },
    {
    img: 'url(https://unsplash.com/photos/J1MznmEvxpk)',
    title: 'Image',
    author: 'author',
    },
  {
    img: 'url(https://unsplash.com/photos/TF3g66Jhs50)',
    title: 'Image',
    author: 'author',
    },
    {
      img: 'url(https://unsplash.com/photos/8xUShy6U1I8)',
      title: 'Image',
      author: 'author',
  },
  ];
 
export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h3>Gallery</h3></ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


