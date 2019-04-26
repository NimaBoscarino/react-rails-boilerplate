import React, { Component } from 'react';
import axios from 'axios';

export default class ListDropdown extends Component {
  constructor(props) {
    super(props)
    // this.state = {}
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  //for list in wishlist

  render() {
    return (
      <div className="dropdown">
        <button className = "dropbtn">My Lists</button>
        <div className="dropdown-content">
        <a href="#">My First Wishlist </a>
        </div>
      </div>
    );
  }
}


