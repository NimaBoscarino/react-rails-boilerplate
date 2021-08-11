import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

import useData from "../hooks/useData.js";
import DashboardEditArtist from "./DashboardEditArtist.jsx"
import DashboardShowArtist from "./DashboardShowArtist.jsx"
import "./ArtistAccount.css"


const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findArtistbyUserId, findRequestIndex} = require("../helpers/selectors")

export default function Dashboard(props) {
  const {data, updateRequestBackend, deleteRequestBackend} = useData()
  const [requestState, setrequestState] = useState(data.requestsApi)
  useEffect(() => {
    setrequestState(data.requestsApi)
  }, [data])
  console.log(requestState)

  const updateContent = function(value, key, index) {
    const requestCopy = [...requestState]
    requestCopy[index][key] = value;
    setrequestState(requestCopy)
  }

  //Update the the content in backend
  const updateRequest = function(index) {
    updateRequestBackend(requestState, index)
  }
  
  //Update the finish date in backend
  const finishRequest = function(index) {
    if (window.confirm('Are you sure the request is finished?')) {
      const day = new Date();
      const today = day.toDateString().slice(4)
      const requestCopy = [...requestState]
      requestCopy[index]["actual_finish_date"] = today;
      setrequestState(requestCopy)

      updateRequestBackend(requestState, index)
    }
  }
  
  //Fn if artist denies this request after he already accepts it
  const denyRequest = function(index) {
    if (window.confirm('Are you sure you want to reject the request?')) {
      const requestCopy = [...requestState]
      requestCopy[index]["artist_id"] = null;
      setrequestState(requestCopy)
      updateRequestBackend(requestState, index)
    }
  }

  let client;
  let dashboardToPay_exist = false;
  let dashboardToFinish_exist = false;
  let dashboardFinished_exist = false;
  const cookies = new Cookies();
  const user_id = cookies.get('user_id')
  const user_identity = cookies.get('identity')

  const dashboardToPay = requestState.map((request, index) => {
    if (request.artist_id == user_id && !request.start_date) {
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
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
          button2 = "Client Accepted"
          button3 = "Deny"
          tag="accepted"
          client = {client}
        />
      )
    }
  })

  const dashboardToFinish = requestState.map((request, index) => {
    if (request.artist_id == user_id && request.start_date && !request.actual_finish_date) {
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
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
    if (request.artist_id == user_id && request.actual_finish_date) {
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
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
              <h3>Accepted Commissions:</h3>
            </div>

            <div className="ArtistAccount_div_dashboards">
              {dashboardToPay}
            </div>
          </div>
        ): (<p></p>)}

        {dashboardToFinish_exist ? (
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Commissions in Progress:</h3>
          </div>

          <div className="ArtistAccount_div_dashboards">
            {dashboardToFinish}
          </div>
        </div>
        ): (<p></p>)}

        {dashboardFinished_exist ? (
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Finished Commissions:</h3>
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