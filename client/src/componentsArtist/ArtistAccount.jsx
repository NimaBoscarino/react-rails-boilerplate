import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import Requests from "./ArtistRequests.jsx";
import DashboardEditable from "./DashboardEditable.jsx"

const requests_for_test = [
  {
    id: 1,
    name: "guitar",
    image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 20,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 2,
    name: "guitar",
    image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 3,
    name: "paint",
    image: "https://images.glaciermedia.ca/polopoly_fs/1.24212567.1601479674!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/kamloops-art-page-2.jpg",
    description: "urgent request",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 40,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
]


export default function Dashboard(props) {
  const [requests, setrequests] = useState(requests_for_test)
  // const [description, setDescription] = useState("");

  function updateContent(value, key, index) {
    const requestCopy = [...requests]
    requestCopy[index][key] = value;
    setrequests(requestCopy)
  }

  const updateRequest = function(index) {
    const requestCopy = [...requests]
    requestCopy[index]["actual_finish_date"] = Date.now();
    setrequests(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }

  const finishRequest = function(index) {
    const day = new Date();
    const today = day.toDateString().slice(4)
    const requestCopy = [...requests]
    requestCopy[index]["actual_finish_date"] = today;
    // setrequests(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }

  const dashboard = requests.map((request, index) => {
    return (
      <DashboardEditable 
        id={request.id}
        image={request.image}
        name={request.name}
        description={request.description}
        price={request.price}
        expected_finish_date={request.expected_finish_date}
        index={index}
        updateContent={updateContent}
        updateRequest={updateRequest}
        finishRequest={finishRequest}
      />
    )
  })

  return (
    <main>
      {dashboard}
    </main>
  )
}