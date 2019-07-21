import React from "react";
import HotSpotIcon from "../../global-assets/hotspot-score-icon-small.png";

function HoodList() {
    return (
      <li className='list-group-item hood-name'>
        Gastown{" "}
        <div className='hotspot-score float-right'>
          <img className='hotspot-score-icon' src={HotSpotIcon} />
          <p className='hotspot-score-number'>87</p>
        </div>
      </li>
    );
}

export default HoodList;
