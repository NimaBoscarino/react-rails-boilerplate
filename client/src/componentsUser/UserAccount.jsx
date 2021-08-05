import React, { useState } from "react";
import axios from 'axios';

import Button from "../componentsArtist/Button"
import DashboardEditable from "../componentsArtist/DashboardEditable.jsx"
import DashboardUneditable from "../componentsArtist/DashboardUneditable.jsx"
import Payment from "./Payment.jsx"

const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser} = require("../helpers/selectors")

export default function Dashboard(props) {
  const [requestState, setrequestState] = useState(requests_for_test)
//Update the state 
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

  const rejectRequest = function(index) {
    alert("reject the request")
    const requestCopy = [...requestState]
    requestCopy[index]["client_id"] = null;
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }
  
  const payRequest = function(index) {
    alert("paying the request")
    const day = new Date();
    const today = day.toDateString().slice(4)
    const requestCopy = [...requestState]
    requestCopy[index]["start_date"] = today;
    setrequestState(requestCopy)
    console.log(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }

  const paidRequest = function(index) {
    alert("paid the request")
    
    // axios.post("/artist_request", requestCopy)
  }

  const dashboardToPay = requestState.map((request, index) => {
    if (request.client_id === 1 && request.actual_finish_date === null && request.start_date === null) {
      return (
        <div>
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
            button2Request={rejectRequest}
            button3Request={payRequest}
            button1 = "Update"
            button2 = "Reject"
            button3 = "Confirm and Pay"
            hidden = "TRUE"
          />
          <Payment 
            index={index}
            payRequest = {payRequest}
          />
        </div>
      )
    }
  })

  const dashboardInProcess = requestState.map((request, index) => {
    if (request.client_id === 1 && request.actual_finish_date === null && request.start_date) {
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

  const dashboardFinished = requestState.map((request, index) => {
    if (request.client_id === 1 && request.actual_finish_date) {
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
    <>
    <h2>My Account</h2>
    <main>
      <div>
        <h3>Request to Confirm and Pay</h3>
        {dashboardToPay}
      </div>

      <div>
        <h3>Request in Process</h3>
        {dashboardInProcess}
      </div>

      <div>
        <h3>Request You Have Finished</h3>
        {dashboardFinished}
      </div>
    </main>
    </>
  )
}