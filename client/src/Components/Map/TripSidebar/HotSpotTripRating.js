import React from "react";
import icon from '../../../global-assets/hotspot-score-icon-small.png';

function HotSpotTripRating() {
  return (
    <div className='hotspot-stat-box'>
      <h2 className='hotspot-title'>HotSpot Score </h2> 
      <h1 className='hotspot-stat-number glow'>44</h1>
      <div className='score-icon-div'>
      <img className="hotspot-score-icon" src={icon} alt={""} />
      </div>
    </div>
  );
}

export default HotSpotTripRating;
