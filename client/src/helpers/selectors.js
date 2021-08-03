const {requests_for_test, artists_for_test, users_for_test} = require("../testingData")

function getRequestsbyArtists(requests, artist_id) {
  return requests.filter((request) => {
    return request.artist_id === artist_id;
  })
}

function getRequestsbyFinishState(requests) {
  return requests.filter((request) => {
    return request.actual_finish_date  
  })
}

function getRequestsbyCategory(requests, category_id) {
  return requests.filter((request) => {
    return request.category_id === category_id; 
  })
}

function getRequestsbyUser(requests, user_id) {
  return requests.filter((request) => {
    return request.client_id === user_id; 
  })
}

// console.log(getRequestsbyUser(requests_for_test, 1))

module.exports = {getRequestsbyArtists, getRequestsbyFinishState, getRequestsbyCategory,getRequestsbyUser}