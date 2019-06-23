import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar.js'
import HeroSection from './components/HeroSection.js'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      isLoggedin: false,
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

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.isLoggedin} />
        <HeroSection />
      </div>
    );
  }
}

export default App;
