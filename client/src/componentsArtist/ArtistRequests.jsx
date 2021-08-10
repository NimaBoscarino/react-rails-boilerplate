import React, {useState, useContext} from "react";
import {stateContext} from '../helpers/stateProvider.jsx';
import axios from 'axios';
import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";
import "./ArtistRequests.css"

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus} = require("../helpers/selectors")

export default function Dashboard(props) {

  const {data , setData} = useContext(stateContext);

  console.log('DATA ---' , data)

  const requests = getUnFinishedRequests(requests_for_test)
  // const [requestState, setrequestState] = useState(requests)

  function acceptRequest(request) {

  const acceptedRequest = {...request[1], artist_id : 41}
   
    axios.put(`/api/requests/${request.id}`, acceptedRequest).then((response) => {
      let id = acceptedRequest.id
      console.log('This is accepted id',id)
     const requests = {...data.requests,  id : acceptedRequest}

      
      setData((prev)=> ({...prev, requests : requests }))
    }).catch((error) => {console.log(error)})
  }

  // function filterbyCategory(requests, e) {
  //   alert("this is Filtering Category")
  //   const categories = ['ALL Categories', 'Guitar', 'Art', 'Handycraft']
  //   const category_id = categories.indexOf(e.label)

  //   const requestsofCategory = getRequestsbyCategory(requests, category_id)
  //   setrequestState(requestsofCategory)
  // }

  function filterbyStatus(requests, e) {
    alert("this is Filtering Status")

    const requestsofCategory = getRequestsbyStatus(requests, e.label)
    // console.log(e.label)
    // setrequestState(requestsofCategory)
  }

  
  
  let tag = null;
  let hidden = "";
  let client;

  const dashboard_unaccepted = Object.entries(data.requests).map((request) => {
    if (!request.artist_id && !request.start_date) {
      // client = findUserbyUserId(users_for_test, request.client_id)[0]
      // console.log(client)
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
          acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          client = {client}
        />
      )
    } else {
      return null
    }

  })

  const dashboard_accepted = Object.entries(data.requests).map((request) => {
    if (request.artist_id && !request.start_date) {
      tag = "accepted"
      hidden = "true"
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      // console.log(client)
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
        acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          client = {client}
        />
      )
    } else {
      return null
    }
  })
  
  const dashboard_inprocess = Object.entries(data.requests).map((request) => {
    
    if (request.artist_id && request.start_date) {
      tag = "in process"
      hidden = "true"
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      // console.log(client)
  
      return (
        request && <DashboardShowArtist 
        key={request[0]}
        request = {request[1]}
        acceptRequest = {acceptRequest}
          tag = {tag}
          hidden = {hidden}
          // client = {client}
        />
      )
    } else {
      return null
    }
  })

  const categotyOptions = ['ALL Categories', 'Guitar', 'Art', 'Handycraft'];
  const statusOptions = ['All', 'Unaccepted', 'Accepted', 'In Process'];

  return (
    <main>
      <nav className="ArtistRequests_nav">
        <FilterBar 
          // onSelect = {(e) => filterbyCategory(requests, e)}
          options = {categotyOptions}
        />
        <FilterBar 
          onSelect = {(e) => filterbyStatus(requests, e)}
          options = {statusOptions}
        />
      </nav>
      <div className="ArtistRequests_div">
        {dashboard_unaccepted}
        <br/>
        {dashboard_accepted}
        <br/>
        {dashboard_inprocess}
      </div>
    </main>
  )
}