import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from "react";

class GoogleMap extends Component {
    render(){
        return (
            <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`
  })(GoogleMap);