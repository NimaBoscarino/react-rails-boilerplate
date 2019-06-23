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
      message: 'Click the button to load data!'
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
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
      <NavBar />
      <HeroSection />
        {/*<h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>


        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>*/}
      </div>
    );
  }
}

export default App;
