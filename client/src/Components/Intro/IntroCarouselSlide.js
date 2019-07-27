
import React, { Component } from "react";
import PlaceholderPic from "../../global-assets/irish-heather-gastown.png";

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
        <div className='card bg-dark text-white intro-feature-card shadow'>
          <img
            className='card-img featured-card-pic'
            src={PlaceholderPic}
            alt={" "}
          />
          <div className='card-img-overlay'>
            <div className='row'>
            
                <h5 className='card-title'>{this.props.place.name}</h5>
                <p className='card-text'>
                {this.props.place.address}<br />
                {this.props.place.types
              .filter(element =>
                ["bar", "restaurant", "night_club"].includes(element)
              )
              .join(" / ")} <br />
                {this.props.place.yelp_price} <br />
                Average Time Spent: {average(this.props.place.time_spent_max, this.props.place.time_spent_min)} <br />
              
                </p>
            
             
                <h4>HotSpot Score</h4>
                <h5>{this.props.place.rating}</h5>
                <p>Total Reviews: {sum(this.props.place.rating_n, this.props.place.yelp_review_count)}</p>
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroCarouselSlide;
