import React, { Component } from "react";
import PlaceHolderPic from "../../global-assets/yaletown.jpg";
import Icon from "../../global-assets/hotspot-score-icon-small.png";
import { FaMapMarkerAlt } from "react-icons/fa";

function sum(a, b) {
  return a + b;
}

class IntroCarouselSlide extends Component {
  render() {
    return (
      <div className='intro-feature-card-div'>
        <div className='card intro-feature-card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col image-col'>
                <div className='card-image-center-box'>
                  <div className='card-image-box'>
                    <img
                      className='card-img'
                      src={this.props.place.yelp_photos[0] || PlaceHolderPic}
                      alt={" "}
                    />
                  </div>
                </div>
              </div>

              <div className='col info-col'>
                <p className='card-title'>{this.props.place.name}</p>
                <p className='card-type'>
                  {this.props.place.yelp_categories.map(category => {
                    return category + " ";
                  })}
                </p>
                <p className='card-hood'>
                  <FaMapMarkerAlt className='icon-carousel hood-icon' />
                  {this.props.place.neighbourhood_name}
                </p>
              </div>

              <div className='col hotspot-col '>
                <div className='hotspot-number-div'>
                  <div className='hotspot-number-score-title-div'>
                    <img className='hotspot-icon' src={Icon} alt={" "} />
                    <h6 className='hotspot-title'>HotSpot Score</h6>
                  </div>

                  <p className='hotspot-score'>
                    {this.props.place.current_hot_score}<span className='percent-sign'>%</span>
                  </p>
                  <p className='total-reviews'>
                    {sum(
                      this.props.place.yelp_review_count,
                      this.props.place.rating_n
                    )}{" "}
                    Total Reviews
                  </p>
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
