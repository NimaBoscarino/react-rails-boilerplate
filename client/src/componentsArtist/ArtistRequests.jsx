import React, { useState } from "react";

import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";

import "./ArtistRequests.css"

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus} = require("../helpers/selectors")

export default function Dashboard(props) {
  function acceptRequest(index) {
    alert("this is working")
    const requestCopy = [...requestState]
    requestCopy[index]["artist_id"] = 1;
    // 1 needs to be changed to the logged in artist_id
    setrequestState(requestCopy)
    // axios.put("/artist_request", requests)
  }

  function filterbyCategory(requests, e) {
    alert("this is Filtering Category")
    const categories = ['ALL Categories', 'Guitar', 'Art', 'Handycraft']
    const category_id = categories.indexOf(e.label)

    const requestsofCategory = getRequestsbyCategory(requests, category_id)
    setrequestState(requestsofCategory)
  }

  function filterbyStatus(requests, e) {
    alert("this is Filtering Status")

    const requestsofCategory = getRequestsbyStatus(requests, e.label)
    console.log(e.label)
    setrequestState(requestsofCategory)
  }

  const requests = getUnFinishedRequests(requests_for_test)
  const [requestState, setrequestState] = useState(requests)
  
  let tag = null;
  let hidden = "";
  let client;

  const dashboard_unaccepted = requestState.map((request, index) => {
    if (!request.artist_id && !request.start_date) {
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      console.log(client)
  
      return (
        <DashboardShowArtist 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          index = {index}
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

  const dashboard_accepted = requestState.map((request, index) => {
    if (request.artist_id && !request.start_date) {
      tag = "accepted"
      hidden = "true"
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      console.log(client)
  
      return (
        <DashboardShowArtist 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          index = {index}
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

  const dashboard_inprocess = requestState.map((request, index) => {
    if (request.artist_id && request.start_date) {
      tag = "in process"
      hidden = "true"
      client = findUserbyUserId(users_for_test, request.client_id)[0]
      console.log(client)
  
      return (
        <DashboardShowArtist 
          id={request.id}
          image={request.image}
          name={request.name}
          description={request.description}
          price={request.price}
          expected_finish_date={request.expected_finish_date}
          index = {index}
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

  const categotyOptions = ['ALL Categories', 'Guitar', 'Art', 'Handycraft'];
  const statusOptions = ['All', 'Unaccepted', 'Accepted', 'In Process'];

  return (
    <main>
      <nav className="ArtistRequests_nav">
        <FilterBar 
          onSelect = {(e) => filterbyCategory(requests, e)}
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