import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import CurrentSelectionCard from "./CurrentSelectionCard";

class GoogleMap extends Component {
  render() {
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176 }}>
          <Marker position={{ lat: 48.0, lng: -122.0 }} />
        </Map>
        <CurrentSelectionCard />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`
})(GoogleMap);
