import React, { Component } from "react";
import axios from "axios";
import Intro from "../Components/Intro/Intro";
import Map from "../Components/Map/Map";
import MyNightPlan from "../Components/MyNightPlan/MyNightPlan";
import Background from "../global-assets/background-parallex.png";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/NavBar/Nav";
import scrollToComponent from "react-scroll-to-component";
import { FaMapMarked } from "react-icons/fa";

import MyNightPlanDesign from "../Components/MyNightPlan/MyNightPlanDesign";

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
    selectionList.forEach(place=>{
      axios.get(`api/popular/${place.id}`).then(response=>{
        // result.push(this.processData(response.data, place))
        place.popularTimes=response.data.popular_times;
        this.setState({
          showMyNightPlan: true,
          nightList: selectionList
        })
      })
    })
  }

  componentDidMount() {
    scrollToComponent(this.Map, {
      offset: 0,
      align: "top",
      duration: 1500,
      ease: "outCirc"
    });
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
          const places = response.data.places;
          places.forEach(place => {
            place.currentBusyScore = Math.ceil(
              place.yelp_rating * 5 +
                place.rating * 5 +
                place.current_busy_value.busy_value * 0.5
            );
          });
          console.log(places[0]);
          this.setState({
            places: places
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
        <div id='NightOutBuilder'>
          <div className='container-fluid'>
            <div className='d-flex justify-content-center'>
              <button
                className='btn btn-outline-light build-night-button'
                onClick={() =>
                  scrollToComponent(this.Map, {
                    offset: 0,
                    align: "top",
                    duration: 1500,
                    ease: "inCirc"
                  })
                }>
                <FaMapMarked className='map-icon' />
                See HotSpots Map
              </button>
            </div>
          </div>
        </div>
        <Map
          showMyNight={this.showMyNight}
          places={this.state.places}
          neighbourhoods={this.state.neighbourhoods}
          ref={section => {
            this.Map = section;
          }}
        />
        {this.state.showMyNightPlan && (
          <MyNightPlan nightList={this.state.nightList} />
        )}
        <MyNightPlanDesign />
        {/* <AreaSelector />
        {this.state.places &&
          this.state.places.slice(0, 5).map(place => {
            return <HotListCards place={place} key={place.id} />;
          })}{" "}
        */}{" "}
        */}
        <Footer />
      </div>
    );
  }
}

export default Main;
