import React, {useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import useData from "../hooks/useData.js";
import "./layout.css"

// import Comment from './comment.js.jsx';


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
  const {data} = useData()
  const requests = getFinishedRequests(data.requestsApi)

  return (
    <>
    <h2 className="gallery_h2">Gallery</h2>
    <div className="gallery">
      <div className={classes.root}>
        <ImageList rowHeight={250} className={classes.imageList}>
          {requests.map((item) => {
            console.log(data.clientsApi)
            let artistName = findArtistbyArtistId(data.artistsApi, item.artist_id)[0]
            return(
              <ImageListItem key={item.id}>
                <img className="gallery_img" src={item.image} alt={item.name} />
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span>by: {artistName.first_name} {artistName.last_name}</span>}
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
