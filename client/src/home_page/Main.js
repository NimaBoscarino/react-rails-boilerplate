import React, { Component } from 'react';
import axios from 'axios';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      message:'Click the button to load data!'
    }
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

  render(){
    return (
    <div className="App">
        <h1>This is the Main</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>

        <h2><Link to="/areas">Areas</Link></h2>
      </div>
    )
  }
}

export default Main;