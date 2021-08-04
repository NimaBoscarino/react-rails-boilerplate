import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import Requests from "./ArtistRequests.jsx";
import DashboardEditable from "./DashboardEditable.jsx"
const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")

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