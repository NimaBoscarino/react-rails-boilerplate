import React, { Component } from "react";
import PlaceHolderPic from "../../global-assets/yaletown.jpg";
import Icon from "../../global-assets/hotspot-score-icon-small.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";


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
                <div className='card-image-box'>
                  <img
                    className='card-img'
                    src={this.props.place.yelp_photos[0] || PlaceHolderPic}
                    alt={" "}
                  />
                </div>
              </div>

              <div className='col info-col'>
                <p className='card-title'>{this.props.place.name}</p>
                <p className='card-title'>{this.props.place.neighbourhood_name}</p>
                <p className='card-address card-info'><FaMapMarkerAlt className='icon-carousel' />{this.props.place.address}</p>
                <p className='card-phone card-info'><MdPhone className='icon-carousel' />{this.props.place.yelp_display_phone}</p>
                <p className='card-score card-info'><FaGoogle className='icon-carousel' />Google Rating: {this.props.place.rating} /5</p>
                <p className='card-score card-info'><FaYelp className='icon-carousel' />Yelp Rating: {this.props.place.yelp_rating} /5</p>

          
  
     
              </div>

              <div className='col hotspot-col '>
                <div className='hotspot-number-div'>
                <h6 className='hotspot-title'>HotSpot Score</h6>

                  <p className='hotspot-score'>{this.props.place.currentBusyScore}</p>
                  <p className='total-reviews'>{sum(this.props.place.yelp_review_count, this.props.place.rating_n)}   Total Reviews</p>
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
