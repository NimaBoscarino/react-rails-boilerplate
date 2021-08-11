import React, {useState, useContext, useEffect} from "react";
import axios from 'axios';

import Button from "../componentsArtist/Button"
import DashboardEditUser from "../componentsUser/DashboardEditUser"
import DashboardShowUser from "../componentsUser/DashboardShowUser"
import useData from "../hooks/useData.js";
import Cookies from 'universal-cookie';


const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findArtistbyArtistId, findRequestIndex} = require("../helpers/selectors")

export default function Dashboard(props) {
  const {data} = useData()

  const [requestState, setrequestState] = useState(data.requestsApi)
  useEffect(() => {
    setrequestState(data.requestsApi)
  }, [data])
//Update the state 
  const updateContent = function(value, key, index) {
    const requestCopy = [...requestState]
    requestCopy[index][key] = value;
    setrequestState(requestCopy)
  }

  const updateRequest = function(index, id) {
    alert("updating")
    const requestCopy = [...requestState]
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)

    const updateRequest = [...data.requestsApi]
    const updateRequest_id = findRequestIndex(updateRequest, id)
    // axios.post("/artist_request", requestCopy)
    axios.put(`/api/requests/${requestCopy[index].id}`, requestCopy[index])
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})

  }

  const rejectRequest = function(index, id) {
    alert("reject the request")
    const requestCopy = [...requestState]
    requestCopy[index]["client_id"] = null;
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
    const updateRequest = [...data.requestsApi]
    const updateRequest_id = findRequestIndex(updateRequest, id)
    // axios.post("/artist_request", requestCopy)
    axios.put(`/api/requests/${requestCopy[index].id}`, requestCopy[index])
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})
  }
  // index = 
  const payRequest = function(index, id) {
    alert("paying the request")
    const day = new Date();
    const today = day.toDateString().slice(4)
    const requestCopy = [...requestState]
    requestCopy[index]["start_date"] = today;
    setrequestState(requestCopy)
    // axios.post("/artist_request", requestCopy)
    const updateRequest = [...data.requestsApi]
    const updateRequest_id = findRequestIndex(updateRequest, id)

    axios.put(`/api/requests/${requestCopy[index].id}`, requestCopy[index])
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})
  }

  let tag;
  let artist;
  let dashboardSubmitted_exist = false;
  let dashboardToPay_exist = false;
  let dashboardInProcess_exist = false;
  let dashboardFinished_exist = false;
  const cookies = new Cookies();
  const user_id = cookies.get('user_id')
  const user_identity = cookies.get('identity')

  const dashboardSubmitted = requestState.map((request, index) => {
    if (request.client_id == user_id && request.actual_finish_date === null && request.start_date === null && request.artist_id === null) {
      artist = findArtistbyArtistId(data.artistsApi, request.artist_id)[0]
      dashboardSubmitted_exist = true
      return (
          <DashboardEditUser 
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
            payRequest={payRequest}
            button1 = "Update"
            button2 = "Reject"
            client = {artist}
          />
      )
    }
  })

  const dashboardToPay = requestState.map((request, index) => {
    if (request.client_id == user_id && request.actual_finish_date === null && request.start_date === null && request.artist_id) {
      artist = findArtistbyArtistId(data.artistsApi, request.artist_id)[0]
      dashboardToPay_exist = true
      return (
          <DashboardEditUser 
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
            payRequest={payRequest}
            button1 = "Update"
            button2 = "Reject"
            client = {artist}
            tag="accepted"
          />
      )
    }
  })

  const dashboardInProcess = requestState.map((request, index) => {
    if (request.client_id == user_id && request.actual_finish_date === null && request.start_date) {
      artist = findArtistbyArtistId(data.artistsApi, request.artist_id)[0]
      dashboardInProcess_exist = true
      return (
        <DashboardShowUser 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          actual_finish_date = {request.actual_finish_date}
          index={index}
          hidden = "TRUE"
          tag="in process"
          client = {artist}
        />
      )
    }
  })  

  const dashboardFinished = requestState.map((request, index) => {
    if (request.client_id == user_id && request.actual_finish_date) {
      artist = findArtistbyArtistId(data.artistsApi, request.artist_id)[0]
      dashboardFinished_exist = true
      return (
        <DashboardShowUser 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          actual_finish_date = {request.actual_finish_date}
          index={index}
          hidden = "TRUE"
          tag ="finished"
          client = {artist}
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
        {dashboardSubmitted_exist ? (        
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Request Submitted, Wait to be Accepted</h3>
          </div>
          <div className="ArtistAccount_div_dashboards">
            {dashboardSubmitted}
          </div>
        </div>
        ) : (<p></p>)}

        {dashboardToPay_exist ? (        
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Request to Confirm and Pay</h3>
          </div>
          <div className="ArtistAccount_div_dashboards">
            {dashboardToPay}
          </div>
        </div>
        ) : (<p></p>)}

        {dashboardInProcess_exist ? (        
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Request in Process</h3>
          </div>
          <div className="ArtistAccount_div_dashboards">
            {dashboardInProcess}
          </div>          
        </div>
        ) : (<p></p>)}

        {dashboardFinished_exist ? (        
        <div className="ArtistAccount_div_detail">
          <div className="ArtistAccount_div_h3">
            <h3>Request You Have Finished</h3>
          </div>
          <div className="ArtistAccount_div_dashboards">
            {dashboardFinished}
          </div>
          
        </div>
        ) : (<p></p>)}        






      </div>
    </main>
  )
}