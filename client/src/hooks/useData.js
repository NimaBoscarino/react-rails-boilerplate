import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export default function useData(props) {
  function updateRequestBackend(requestCopy, index) {
    // backend update
    axios.put(`/api/requests/${requestCopy[index].id}`, requestCopy[index])
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})
  }

  function deleteRequestBackend(requestCopy, index) {
    // backend update
    axios.delete(`/api/requests/${requestCopy[index].id}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})
  }

  const [data, setData] = useState({
    artistsApi : [],
    clientsApi : [],
    requestsApi : [],
    commentsApi : [],
    reviewsApi : [],
    messagesApi: [],
  });

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
        const artistsApi = response[0].data;
        const clientsApi = response[1].data;
        const categoriesApi = response[2].data;
        const reviewsApi = response[3].data;
        const commentsApi = response[4].data;
        const requestsApi = response[5].data;
        const messagesApi = response[6].data;

        setData((prev) => ({ ...prev, clientsApi, artistsApi, requestsApi: requestsApi, categoriesApi, reviewsApi, commentsApi, messagesApi}));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {data, updateRequestBackend, deleteRequestBackend}
};
