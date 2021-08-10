import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export default function StateProvider(props) {
  const [data, setData] = useState({
    artists : {},
    clients : {},
    requests : [],
    commentsApi : [],
    reviews : [],
    messages: [],
    


  });

  const filterTableById = function (table, Id, column) {
    const filteredTable = table.filter((com) => com[column] === Id);
    const filteredArray = filteredTable.map((com) => com.id);
    return filteredArray;
  };

  useEffect(() => {
    Promise.all([
      axios.get("api/clients"),
      axios.get("/api/artists"),
      axios.get("/api/categories"),
      axios.get("/api/reviews"),
      axios.get("/api/comments"),
      axios.get("/api/requests"),
      axios.get("/api/messages"),
    ])
      .then((response) => {
        const clientsApi = response[0].data;
        const artistsApi = response[1].data;
        const categoriesApi = response[2].data;
        const reviewsApi = response[3].data;
        const commentsApi = response[4].data;
        const requestsApi = response[5].data;
        const messagesApi = response[6].data;


        const clients = {}
        const artists = {}
        const requests = {}
        const categories = {}
        const reviews = {}
        const comments = {}
        const messages = {}

        const requestsWithComments = requestsApi.map((request) => ({
          ...request,
          comments: filterTableById(commentsApi, request.id, "request_id"),
        }));

        const artistsWithReviews = artistsApi.map((artist) => ({
          ...artist,
          reviews: filterTableById(reviewsApi, artist.id, "artist_id"),
        }));
        
        clientsApi.map((client)=> clients[client.id] = client)
        artistsWithReviews.map((client)=> artists[client.id] = client)
        requestsWithComments.map((client)=> requests[client.id] = client)
        categoriesApi.map((client)=> categories[client.id] = client)
        reviewsApi.map((client)=> reviews[client.id] = client)
        commentsApi.map((client)=> comments[client.id] = client)
        messagesApi.map((client)=> messages[client.id] = client)




        setData((prev) => ({ ...prev, clients, artists, requests, categories, reviews, commentsApi, messages}));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataProvider = { data, setData};
  return (
    <stateContext.Provider value={dataProvider}>
      {props.children}
    </stateContext.Provider>
  )
};

export const stateContext = createContext();
