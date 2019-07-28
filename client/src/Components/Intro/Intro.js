import React, { Component } from "react";
import Carousel from "./IntroCarousel";
import HotSpotIcon from "../../global-assets/hotspot-score-icon-small.png";
import NightOutBuilder from "../NightOutBuilder/NightOutBuilder";
import Logo from "../../global-assets/hotspot-logo-dropshadow.png";

class Intro extends Component {
  render() {
    return (
      <div id='Intro'>
        <div className='container-fluid intro-box-div'>
          <div className='row title-section'>
            <div className='col'>
              <div className='hotspot-logo-div'>
                <img
                  className='hotspot-logo-number'
                  src={HotSpotIcon}
                  alt={""}
                />
              </div>
              <h1 className='intro-title'>
                Find Popular + Highly Rated Places
              </h1>
              <p className='intro-summary'>
                Discover restaurants, clubs and bars that are consistently
                busy (based on real time data) and highly rated (according to
                Google and Yelp) in Vancouver's most popular areas
              </p>
            </div>

            <div className='container-fluid intro-carousel-div'>
              <h4 className='popular-now-title blink'>
                <span className='badge badge-pill badge-info live-icon'>LIVE</span> Popular Right
                Now
              </h4>
              <Carousel places={this.props.places} />
            </div>
          </div>
        </div>

        <NightOutBuilder />
      </div>
    );
  }
}

export default Intro;
