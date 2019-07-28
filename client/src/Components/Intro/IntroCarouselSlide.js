
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
        <div className='card bg-dark text-white intro-feature-card shadow'>
          <img
            className='card-img featured-card-pic'
            src={this.props.place.yelp_photos[0] || PlaceHolderPic} alt={""}
          />
          <div className='card-img-overlay'>
            <div className='row m-0 p-0'>
            
                <h5 className='card-title'>{this.props.place.name}</h5>
                <div className='card-text'>
          
                <p className="address">{this.props.place.address}</p>

                <p className="type-and-price">{this.props.place.types
              .filter(element =>
                ["bar", "restaurant", "night_club"].includes(element)
              )
              .join(" / ")} | Price: {this.props.place.yelp_price}</p>
               
              

 

              <div className='hotspot-div'>

              <h4 className='hotspot-title'>HotSpot Score</h4>

              <div className='hotspot-number-div'>
                <h6 className='hotspot-score'>{this.props.place.rating}%</h6>
                <p className='total-reviews'> Total Reviews: {sum(this.props.place.rating_n, this.props.place.yelp_review_count)}</p>
                </div>

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
