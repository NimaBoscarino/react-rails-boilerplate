import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export default function StateProvider(props) {
  const [data, setData] = useState({
    requests: [],
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
        const clients = response[0].data;
        const artists = response[1].data;
        const categories = response[2].data;
        const reviews = response[3].data;
        const comments = response[4].data;
        const requests = response[5].data;
        const messages = response[6].data;


        console.log("Categories" , categories)
        const requestsWithComments = requests.map((request) => ({
          ...request,
          comments: filterTableById(comments, request.id, "request_id"),
        }));

        const artistsWithReviews = artists.map((artist) => ({
          ...artists,
          reviews: filterTableById(reviews, artist.id, "artist_id"),
        }));

        setData((prev) => ({ ...prev, requests: requestsWithComments }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData]);

  const dataProvider = { data, setData};
  return (
    <stateContext.Provider value={dataProvider}>
      {props.children}
    </stateContext.Provider>
  )
};

export const stateContext = createContext();
