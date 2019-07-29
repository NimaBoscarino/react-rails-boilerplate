import React, { Component } from "react";
import Carousel from "./IntroCarousel";
import HotSpotIcon from "../../global-assets/hotspot-score-icon-small.png";

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
              <h1 className='intro-title'>Popular + Highly Rated Places</h1>
              <div className='container-fluid intro-carousel-div'>
                <Carousel places={this.props.places} />
              </div>
              <p className='intro-summary'>
                Discover restaurants, clubs and bars that are consistently busy
                (based on real time data) and highly rated (according to Google
                and Yelp) in Vancouver's most popular areas
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
