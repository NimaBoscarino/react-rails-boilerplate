import React from "react";
import icon from '../../../global-assets/hotspot-score-icon-small.png';

function HotSpotTripRating(props) {
  return (
    <div className='hotspot-stat-box'>
     <div className='hotspot-title-div'>
     <img className="hotspot-icon" src={icon} alt={""} />
      <h2 className='hotspot-title'>HotSpot Score </h2>
      </div>
      <h1 className='hotspot-stat-number glow'>
        {
          (props.places.length!==0) ?
          (props.places.reduce((acc, cur)=>
            acc+cur.current_hot_score,0))/(props.places.length)
            : 0
        }
      </h1>
      <div className='score-icon-div'>

      </div>
    </div>
  );
}

export default HotSpotTripRating;
