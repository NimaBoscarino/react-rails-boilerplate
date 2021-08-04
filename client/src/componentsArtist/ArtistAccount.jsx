import React, { useState } from "react";
import axios from 'axios';

import Button from "./Button.jsx"
import DashboardEditable from "./DashboardEditable.jsx"
import DashboardUneditable from "./DashboardUneditable.jsx"

const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser} = require("../helpers/selectors")

export default function Dashboard(props) {
  // const requests = getRequestsbyArtists(requests_for_test, 1)
  // change 1 to the actual artist_id
  const [requestState, setrequestState] = useState(requests_for_test)

  const updateContent = function(value, key, index) {
    const requestCopy = [...requestState]
    requestCopy[index][key] = value;
    setrequestState(requestCopy)
  }

  const updateRequest = function(index) {
    alert("updating")
    const requestCopy = [...requestState]
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }

  const finishRequest = function(index) {
    alert("finishing the request")
    const day = new Date();
    const today = day.toDateString().slice(4)
    const requestCopy = [...requestState]
    requestCopy[index]["actual_finish_date"] = today;
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }
  
  const denyRequest = function(index) {
    alert("deny this request")
    const requestCopy = [...requestState]
    requestCopy[index]["artist_id"] = null;
    setrequestState(requestCopy)
    console.log(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }

  const dashboardToFinish = requestState.map((request, index) => {
    if (request.artist_id === 1 && request.actual_finish_date === null) {
      return (
        <DashboardEditable 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          actual_finish_date = {request.actual_finish_date}
          index={index}
          updateContent={updateContent}
          button1Request={updateRequest}
          button2Request={finishRequest}
          button3Request={denyRequest}
          button1 = "Update"
          button2 = "Finish"
          button3 = "Deny"
        />
      )
    }
  })

  const dashboardFinished = requestState.map((request, index) => {
    if (request.artist_id === 1 && request.actual_finish_date) {
      return (
        <DashboardUneditable 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          actual_finish_date = {request.actual_finish_date}
          index={index}
          hidden = "TRUE"
        />
      )
    }
  })

  return (
    <main>
      <div>
        <h3>Request To Finish</h3>
        {dashboardToFinish}
      </div>

      <div>
        <h3>Request You Have Finished</h3>
        {dashboardFinished}

      </div>
    </main>
  )
}