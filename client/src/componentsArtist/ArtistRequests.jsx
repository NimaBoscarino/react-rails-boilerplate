import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import {stateContext} from '../helpers/stateProvider.jsx';

import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";
import useData from "../hooks/useData.js";
import Cookies from 'universal-cookie';

import "./ArtistRequests.css"

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findRequestIndex} = require("../helpers/selectors")

export default function Dashboard(props) {
  const {data} = useData()

  // const {data , setData} = useContext(stateContext);
  const requests = getUnFinishedRequests(data.requestsApi)
  const [requestState, setrequestState] = useState(requests)
  
  useEffect(() => {
    setrequestState(requests)
  }, [data])


  function acceptRequest(index, id) {
    alert("this is working")    
    console.log(id)
    const requestCopy = [...requestState]
    requestCopy[index]["artist_id"] = Number(user_id);
    setrequestState(requestCopy)

    // put request to backend 
    const updateRequest = [...data.requestsApi]
    const updateRequest_id = findRequestIndex(updateRequest, id)
    // console.log(updateRequest_id)
    // console.log(requestCopy[index])

    axios.put(`/api/requests/${requestCopy[index].id}`, requestCopy[index])
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {console.log(error)})
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

  let tag = null;
  let hidden = "";
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