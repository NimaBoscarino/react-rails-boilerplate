import React, { Component } from "react";
import axios from "axios";
import Intro from "../Components/Intro/Intro";

import Map from "../Components/Map/Map";
import AreaSelector from "../Components/AreaSelector/AreaSelector";
import HotListCards from "../Components/HotListCards/HotListCards";
import MyNightPlan from "../Components/MyNightPlan/MyNightPlan";
import Background from "../global-assets/background-parallex.png";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/NavBar/Nav";
import NightOutBuilder from "../Components/NightOutBuilder/NightOutBuilder";
// import MyNightPlanDesign from "../Components/MyNightPlan/MyNightPlanDesign";

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
    axios.get("/neighbourhoods").then(response => {
      const neighbourhoods = this.processDataNeighbourhoods(
        response.data.neighbourhoods
      );
      this.setState({
        neighbourhoods: neighbourhoods
      });
      axios
        .get("/places") // You can simply make your requests to "/api/whatever you want"
        .then(response => {
          console.log(response.data.places[0]);
          this.setState({
            places: response.data.places
          });
        });
    });
  }

  processDataNeighbourhoods(neighbourhoodData) {
    return neighbourhoodData.map(element => {
      return {
        id: element.id,
        name: element.name,
        center: {
          lat: element.centerlat,
          lng: element.centerlong
        },
        borderPoints: element.border_points
      };
    });
  }

  render() {
    return (
      <div className='App' style={sectionStyle}>
        <Nav />
        <Intro
          places={this.state.places}
          neighbourhoods={this.state.neighbourhoods}
        />
        <NightOutBuilder />
        <Map
          showMyNight={this.showMyNight}
          places={this.state.places}
          neighbourhoods={this.state.neighbourhoods}
        />
        {this.state.showMyNightPlan && (
          <MyNightPlan nightList={this.state.nightList} />
        )}
        {/* <MyNightPlanDesign /> */}
        <AreaSelector />
        {this.state.places &&
          this.state.places.slice(0, 5).map(place => {
            return <HotListCards place={place} key={place.id} />;
          })}{" "}
        */}
        <Footer />
      </div>
    );
  }
}

export default Main;
