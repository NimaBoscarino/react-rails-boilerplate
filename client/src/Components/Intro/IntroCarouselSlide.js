import React, { Component } from "react";
import PlaceHolderPic from "../../global-assets/yaletown.jpg";
import Icon from '../../global-assets/hotspot-score-icon-small.png';

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
          <div className='card-body'>
            <div className='row'>
              <div className='col image-col'>
                <div className='card-image-box'>
                  <img
                    className='card-img'
                    src={this.props.place.yelp_photos[0] || PlaceHolderPic}
                    alt={" "}
                  />
                </div>
              </div>

              <div className='col w-33'>
                <p className='card-title'>{this.props.place.name}</p>

                <p className='hood-title'>Hottest Spot in Gastown Right Now</p>
                <h4 className='popular-now-title'>
                  <span className='badge badge-pill badge-info live-icon'>
                    LIVE
                  </span>{" "}
                  Popular Right Now
                </h4>
              </div>

              <div className='col '>
                <div className='hotspot-number-div'>
                  <p className='hotspot-score'>{this.props.place.rating}</p>
                </div>
                <div className='hotspot-icon-box'>
                  <img className='hotspot-icon' src={Icon} alt={" "} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroCarouselSlide;
