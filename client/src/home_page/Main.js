import React, { Component } from "react";
import axios from "axios";
import Intro from "../Components/Intro/Intro";

import Map from "../Components/Map/Map";
import AreaSelector from "../Components/AreaSelector/AreaSelector";
import HotListCards from "../Components/HotListCards/HotListCards";
import MyNightPlan from "../Components/MyNightPlan/MyNightPlan";
import Background from "../global-assets/vancouver-main-background.png";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  WebkitBackgroundSize: "cover",
  MozBackgroundSize: "cover",
  OBackgroundSize: "cover",
  BackgroundSize: "cover"
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
      showMyNightPlan: false
    };
    this.showMyNight = this.showMyNight.bind(this);
  }

  showMyNight(selectionList) {
    this.setState({
      showMyNightPlan: true,
      nightList: selectionList
    });
  }

  componentDidMount() {
    axios
      .get("/neighbourhoods") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const neighbourhoods=this.processDataNeighbourhoods(response.data.neighbourhoods);
        this.setState({
          neighbourhoods: neighbourhoods
        });
      });
    axios
      .get("/places") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        this.setState({
          places: response.data.places
        });
      });
  }

  processDataNeighbourhoods(neighbourhoodData){
    return neighbourhoodData.map(element=>{
      return { 
        id:element.id,
        name:element.name,
        center: {
          lat:element.centerlat, 
          lng:element.centerlong},
        borderPoints:element.border_points
      }
    });
  }

  render() {
    return (
      <div className='App'>
        <Intro />
        <Map showMyNight={this.showMyNight} places={this.state.places} neighbourhoods={this.state.neighbourhoods}/>

        <section style={sectionStyle}>
          {this.state.showMyNightPlan && (
            <MyNightPlan nightList={this.state.nightList} />
          )}
          <AreaSelector />

          {this.state.places &&
            this.state.places.map(place => {
              return <HotListCards place={place} key={place.id} />;
            })}

          <h1>This is the Main</h1>
          <h2>{this.state.message}</h2>
          <button onClick={this.fetchData}>Fetch Data</button>
        </section>
      </div>
    );
  }
}

export default Main;
