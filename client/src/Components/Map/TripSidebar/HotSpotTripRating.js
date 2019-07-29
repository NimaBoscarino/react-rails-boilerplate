import React from "react";
import icon from '../../../global-assets/hotspot-score-icon-small.png';

function HotSpotTripRating(props) {
  return (
    <div className='hotspot-stat-box'>
      <h2 className='hotspot-title'>HotSpot Score </h2> 
      <h1 className='hotspot-stat-number glow'>
        {
          props.places ?
          props.places.reduce((acc, cur)=>
            acc+makeScore(cur),0)
            : 0
        }
      </h1>
      <div className='score-icon-div'>
      <img className="hotspot-score-icon" src={icon} alt={""} />
      </div>
    </div>
  );
}

function makeScore(place) {
  const yelp = place.yelp_rating / 5 * 25
  const google = place.rating / 5 * 25
  const busy = place.popular_times[0].busy_value * 0.5

  return Math.ceil(yelp + google + busy)
}

export default HotSpotTripRating;
