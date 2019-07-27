import React, { Component } from "react";
import Carousel from "./IntroCarousel";
import NightOutBuilder from "../NightOutBuilder/NightOutBuilder";
import Background from "../../global-assets/vancouver-main-background.png";

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

class Intro extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <div id='Intro'>
          <div className='container-fluid intro-box-div'>
            <div className='row title-section'>
              <div className='col'>
                <h1 className='intro-title'>
                  Vancouver's Most Popular Places
                </h1>
                <p className='intro-summary'>
                  Discover restaurants, clubs and bars that are both
                  consistently busy (based on real time data) and highly rated
                  (according to Google and Yelp) in Vancouver's most popular
                  areas.
                </p>
              </div>
              <div className='container-fluid intro-carousel-div'>
                <Carousel places={this.props.places} />
              </div>
            </div>
          </div>
          <NightOutBuilder />
        </div>
      </section>
    );
  }
}

export default Intro;
