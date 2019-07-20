import React, { Component } from "react";
import VancouverMapPlaceHolder from "./assets/vancouver-map-placeholder.png";

class Map extends Component {
  render() {
    return (
      <div id='map'>
        <div className='map-container map-container-full'>
          <img
            className='map-picture-placeholder'
            src={VancouverMapPlaceHolder}
          />
        </div>
      </div>
    );
  }
}

export default Map;
