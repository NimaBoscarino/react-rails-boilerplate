import React, { Component } from "react";
import axios from "axios";
import Intro from "../Components/Intro/Intro";
import NightOutBuilder from "../Components/NightOutBuilder/NightOutBuilder";
import Map from "../Components/Map/Map";
import AreaSelector from "../Components/AreaSelector/AreaSelector";
import HotListCards from "../Components/HotListCards/HotListCards";
import AreaCards from "../Components/AreaCards/AreaCards";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  fetchData = () => {
    axios
      .get("/places/1") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.place); // Just the message
        this.setState({
          message: JSON.stringify(response.data.place)
        });
      });
  };

  render() {
    return (
      <div className='App'>
        <Intro />
        <NightOutBuilder />
        <Map />
        <AreaSelector />

        <section className=''>
          <HotListCards />
          <HotListCards />
          <HotListCards />
        </section>

        <section className='row area-section d-flex justify-content-between'>
          <AreaCards />
        </section>

        <h1>This is the Main</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.fetchData}>Fetch Data</button>
      </div>
    );
  }
}

export default Main;
