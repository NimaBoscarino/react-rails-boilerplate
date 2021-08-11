import React, {useState, useContext, useEffect} from "react";
import axios from "axios";

import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";
import useData from "../hooks/useData.js";
import Cookies from 'universal-cookie';

import "./ArtistRequests.css"

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findRequestIndex} = require("../helpers/selectors")

export default function Dashboard(props) {
  const {data, updateRequestBackend, deleteRequestBackend} = useData()
  const requests = getUnFinishedRequests(data.requestsApi)
  const [requestState, setrequestState] = useState(requests)
  useEffect(() => {
    setrequestState(requests)
  }, [data])


  function acceptRequest(index) { 
    const requestCopy = [...requestState]
    requestCopy[index]["artist_id"] = Number(user_id);
    setrequestState(requestCopy)

    updateRequestBackend(requestCopy, index)
  }

  function filterbyCategory(requests, e) {
   
    const category_id = categories.indexOf(e.label)
    // alert("this is Filtering Category")
    const categories = ['ALL Categories', 'Guitar', 'Art', 'Handycraft']
   

    const requestsofCategory = getRequestsbyCategory(requests, category_id)
    setrequestState(requestsofCategory)
  }

  

  function filterbyStatus(requests, e) {
    const requestsofCategory = getRequestsbyStatus(requests, e.label)
    setrequestState(requestsofCategory)
  }

  let client;
  const cookies = new Cookies();
  const user_id = cookies.get('user_id')
  const user_identity = cookies.get('identity')

  const dashboard_unaccepted = requestState.map((request, index) => {
    if (!request.artist_id && !request.start_date) {
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
  
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
          hidden = ""
          client = {client}
        />
      )
    } 
  })
  
  const dashboard_accepted = requestState.map((request, index) => {
    if (request.artist_id && !request.start_date) {
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
  
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
          tag = "accepted"
          hidden = "true"
          client = {client}
        />
      )
    }
  })

  const dashboard_inprocess = requestState.map((request, index) => {
    if (request.artist_id && request.start_date) {
      client = findUserbyUserId(data.clientsApi, request.client_id)[0]
  
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
          tag = "in process"
          hidden = "true"
          client = {client}
        />
      )
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