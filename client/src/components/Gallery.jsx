import React, {useState, useContext } from 'react';
import {stateContext} from '../helpers/stateProvider.jsx';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Comment from './comment.js.jsx';

import "./layout.css"

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findArtistbyArtistId} = require("../helpers/selectors")

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper, 
  },
  imageList: {
    width: 905,
    height: 500,
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

 
export default function Gallery() {
  const classes = useStyles();
  // const {data , setData} = useContext(stateContext);
  // console.log('DATA', data)

  const requests = getFinishedRequests(requests_for_test)
  const [requestState, setrequestState] = useState(requests)

  return (
    <>
    <h2 className="gallery_h2">Gallery</h2>
    <div className="gallery">
      <div className={classes.root}>
        <ImageList rowHeight={250} className={classes.imageList}>
          {requestState.map((item) => {
            console.log(item)
            let artistName = findArtistbyArtistId(artists_for_test, item.artist_id)[0].name
            return(
              <ImageListItem key={item.id}>
                <img className="gallery_img" src={item.image} alt={item.name} />
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span>by: {artistName}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${item.artist_id}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      </div>
    </div>
    </>
  );
}


// The example data is structured as follows:
 
  //import image from 'path/to/image.jpg';
  //[etc...]
 
  // const itemData = [
  //   {
  //     img: 'url(https://unsplash.com/photos/5rsNohd8bY8.jpg)',
  //     title: 'title 1',
  //     author: 'author 1',
  //   },
  //   {
  //   img: 'url(https://unsplash.com/photos/J1MznmEvxpk.jpg)',
  //   title: 'title 2',
  //   author: 'author 2',
  //   },
  // {
  //   img: 'url(https://unsplash.com/photos/TF3g66Jhs50.jpg)',
  //   title: 'title 3',
  //   author: 'author 3',
  //   },
  //   {
  //     img: 'url(https://unsplash.com/photos/8xUShy6U1I8.jpg)',
  //     title: 'title 4',
  //     author: 'author 4',
  // },
  // ];