import React, { Component } from "react";
import PlaceHolderPic from "../../global-assets/yaletown.jpg";

function sum(a, b) {
  return a + b;
}

function average(a, b) {
  return (a + b) / 2;
}

class IntroCarouselSlide extends Component {
  render() {
    return (
      <div className='intro-feature-card-div'>
        <div className='card intro-feature-card'>
          <img
            className='card-img-top'
            src={this.props.place.yelp_photos[0] || PlaceHolderPic}
            alt={" "}
          />
          <div className='card-body'>
            <div className='card-text'>
              <p className='card-title'>
                {this.props.place.name} {this.props.place.rating} %
              </p>
              <p className='hood-title'>Hottest Spot in Gastown Right Now</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroCarouselSlide;
