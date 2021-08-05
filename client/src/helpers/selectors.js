const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")

function getRequestsbyArtists(requests, artist_id) {
  return requests.filter((request) => {
    return request.artist_id === artist_id;
  })
}

function getFinishedRequests(requests) {
  return requests.filter((request) => {
    return request.actual_finish_date  
  })
}

function getUnFinishedRequests(requests) {
  return requests.filter((request) => {
    return request.actual_finish_date === null
  })
}

function getRequestsbyCategory(requests, category_id) {
  if (category_id === 0) {
    return requests
  } else {
    return requests.filter((request) => {
      return request.category_id === category_id; 
    })
  }
}

function getRequestsbyUser(requests, user_id) {
  return requests.filter((request) => {
    return request.client_id === user_id; 
  })
}

console.log(getUnFinishedRequests(requests_for_test))

module.exports = {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser}