import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar";
import TripSidebar from "./TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard";
import GoogleMap from "./GoogleMap";

class Map extends Component {
  render() {
    return (
      <div id='Map'>
        <h1 className='hood-main-title'>Gastown</h1>
        <div className='d-flex justify-content-between h-100 w-100'>
          <GoogleMap />
          <HoodSidebar />
          <TripSidebar />
        </div>
      </div>
    );
  }
}

export default Map;
