import React, { useState } from "react";

import DashboardShowArtist from "./DashboardShowArtist.jsx"
import FilterBar from "./FilterBar.jsx";

const {requests_for_test, artists_for_test, users_for_test, categories_for_test} = require("../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser} = require("../helpers/selectors")

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
    alert("this is working")

    const categories = ['ALL Categories', 'Guitar', 'Art', 'Handycraft']
    const category_id = categories.indexOf(e.label)

    const requestsofCategory = getRequestsbyCategory(requests, category_id)
    setrequestState(requestsofCategory)
  }

  const requests = getUnFinishedRequests(requests_for_test)
  const [requestState, setrequestState] = useState(requests)
  
  let tag;
  let hidden = ""

  const dashboard = requestState.map((request, index) => {
    if (request.artist_id && request.start_date) {
      tag = "accepted"
      hidden = "true"
    } else if (request.artist_id && !request.start_date) {
      tag = "in process"
      hidden = "true"
    } else {
      tag = null
    }

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
      />
    )
  })

  
  const filterBar = <FilterBar 
    onSelect = {(e) => filterbyCategory(requests, e)}
  />


  return (
    <main>
      {filterBar}
      {dashboard}
    </main>
  )
}