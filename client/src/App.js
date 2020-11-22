import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      message2: 'Exercises'
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

  fetchInfo = () => {
    axios.get('/api/exercises') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message2[0].exercise_name) // Just the message
      this.setState({
        message2: `Name: ${response.data.message2[0].exercise_name} Description: ${response.data.message2[0].description}`
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>   
        <h1>{ this.state.message2 }</h1>
        <button onClick={this.fetchInfo} >
          Fetch Info
        </button>      
      </div>
    );
  }
}

export default App;
