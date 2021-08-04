import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }

  fetchData = () => {
    // axios
    //   .get("/api/data") // You can simply make your requests to "/api/whatever you want"
    //   .then((response) => {
    //     // handle success
    //     console.log(response.data); // The entire response from the Rails API

    //     console.log(response.data.message); // Just the message
    //     this.setState({
    //       message: response.data.message,
    //     });
    //   });
    // () => {
    Promise.all([
      axios.get("/api/clients"),
      axios.get("/api/artists"),
      axios.get("/api/categories"),
      axios.get("/api/reviews"),
      axios.get("/api/comments"),
      axios.get("/api/requests"),
    ]).then((response) => {
      const clients = response[0].data;
      const artists = response[1].data;
      const categories = response[2].data;
      const reviews = response[3].data;
      const comments = response[4].data;
      const requests = response[5].data;
      this.setState((prev) => ({
        clients,
        artists,
        categories,
        reviews,
        comments,
        requests,
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
      </div>
    );
  }
}

export default App;
