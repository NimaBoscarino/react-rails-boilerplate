import React from "react";
import PlaceholderPic from "../../global-assets/irish-heather-gastown.png";

function IntroCarouselSlide() {
  return (
    <div className='intro-feature-card-div'>
      <div className='card bg-dark text-white intro-feature-card shadow'>
        <img
          className='card-img featured-card-pic'
          src={PlaceholderPic}
          alt='Card image'
        />
        <div className='card-img-overlay'>
          <div className='row'>
            <div className='col-8 card-info-col'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className='col-4 hotspot-col'>
              <h4>HotSpot Score</h4>
              <h5>45</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroCarouselSlide;
