import React, { useState } from "react";

import DashboardEditArtist from "./DashboardEditArtist.jsx"
import DashboardShowArtist from "./DashboardShowArtist.jsx"
import "./ArtistAccount.css"

const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findArtistbyUserId} = require("../helpers/selectors")

export default function Dashboard(props) {
  // const requests = getRequestsbyArtists(requests_for_test, 1)
  // change 1 to the actual artist_id
  //All request data imported from TestData.js
  const [requestState, setrequestState] = useState(requests_for_test)

  const updateContent = function(value, key, index) {
    const requestCopy = [...requestState]
    requestCopy[index][key] = value;
    setrequestState(requestCopy)
  }
//FN to post update
  const updateRequest = function(index) {
    alert("updating")
    const requestCopy = [...requestState]
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }

//FN 
  const finishRequest = function(index) {
    alert("finishing the request")
    const day = new Date();
    const today = day.toDateString().slice(4)
    const requestCopy = [...requestState]
    requestCopy[index]["actual_finish_date"] = today;
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }
  
  //Fn if artist denies this request after he already accepts it
  const denyRequest = function(index) {
    alert("deny this request")
    const requestCopy = [...requestState]
    requestCopy[index]["artist_id"] = null;
    setrequestState(requestCopy)
    console.log(requestCopy)
    // axios.post("/artist_request", requestCopy)
  }


  let client;
  let dashboardToPay_exist = false;
  let dashboardToFinish_exist = false;
  let dashboardFinished_exist = false;

  const dashboardToPay = requestState.map((request, index) => {
    if (request.artist_id === 1 && request.start_date === null) {
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      dashboardToPay_exist = true
      return (
        <DashboardEditArtist 
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
          button2 = ""
          button3 = "Deny"
          tag="accepted"
          client = {client}
        />
      )
    }
  })

  const dashboardToFinish = requestState.map((request, index) => {
    if (request.artist_id === 1 && request.start_date && request.actual_finish_date === null) {
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      dashboardToFinish_exist = true
      return (
        <DashboardEditArtist 
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
          tag="in process"
          client = {client}
        />
      )
    }
  })
  //dashboard to show all the requests of a single artist
  const dashboardFinished = requestState.map((request, index) => {
    if (request.artist_id === 1 && request.actual_finish_date) {
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      dashboardFinished_exist = true
      return (
        <DashboardShowArtist 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          actual_finish_date = {request.actual_finish_date}
          index={index}
          hidden = "TRUE"
          tag="finished"
          client = {client}
        />
      )
    }
  })

  return (
    <main>
      <nav className="ArtistRequests_nav">
        <h2>My Account</h2>
      </nav>
      <div className="ArtistAccount_div">
        {dashboardToPay_exist ? (
          <div className="ArtistAccount_div_detail">
            <div className="ArtistAccount_div_h3">
              <h3>Requests Accepted but not Paied yet</h3>
            </div>

            <div className="ArtistAccount_div_dashboards">
              {dashboardToPay}
            </div>
          </div>
        ): (<p></p>)}

        {dashboardToFinish_exist ? (
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Requests To Finish</h3>
          </div>

          <div className="ArtistAccount_div_dashboards">
            {dashboardToFinish}
          </div>
        </div>
        ): (<p></p>)}

        {dashboardFinished_exist ? (
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Requests You Have Finished</h3>
          </div>

          <div className="ArtistAccount_div_dashboards">
            {dashboardFinished}
          </div>
        </div>
        ): (<p></p>)}
        




      </div>
    </main>
  )
}