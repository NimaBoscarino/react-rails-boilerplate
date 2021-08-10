const {
  requests_for_test,
  artists_for_test,
  users_for_test,
} = require("../testingData");

function getRequestsbyArtists(requests, artist_id) {
  return requests.filter((request) => {
    return request.artist_id == artist_id;
  });
}

function getFinishedRequests(requests) {
  return requests.filter((request) => {
    return request.actual_finish_date;
  });
}

function getUnFinishedRequests(requests) {
  return requests.filter((request) => {
    return request.actual_finish_date === null;
  });
}

function getRequestsbyCategory(requests, category_id) {
  if (category_id === 0) {
    return requests;
  } else {
    return requests.filter((request) => {
      return request.category_id == category_id;
    });
  }
}

function getRequestsbyUser(requests, user_id) {
  return requests.filter((request) => {
    return request.client_id == user_id;
  });
}

function findUserbyUserId(users, user_id) {
  return users.filter((user) => {
    console.log(user.id == user_id)
    return user.id == user_id;
  });
}

function findUserbyEmail(users, email) {
  return users.filter((user) => {
    return user.email === email;
  });
}

function getRequestsbyStatus(requests, status) {
  if (status === "All") {
    return requests;
  } else if (status === "Unaccepted") {
    return requests.filter((request) => {
      return !request.artist_id && !request.start_date;
    });
  } else if (status === "Accepted") {
    return requests.filter((request) => {
      return request.artist_id && !request.start_date;
    });
  } else if (status === "In Process") {
    return requests.filter((request) => {
      return request.artist_id && request.start_date;
    });
  }
}

function findArtistbyArtistId(artists, artist_id) {
  return artists.filter((artist) => {
    return artist.id == artist_id;
  });
}



// console.log(findArtistbyArtistId(artists_for_test, 1));

module.exports = {
  getRequestsbyArtists,
  getFinishedRequests,
  getUnFinishedRequests,
  getRequestsbyCategory,
  getRequestsbyUser,
  findUserbyUserId,
  findUserbyEmail,
  getRequestsbyStatus,
  findArtistbyArtistId,
};
