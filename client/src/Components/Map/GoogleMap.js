import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from 'axios';
import React, { Component } from "react";
import CurrentSelectionCard from "./CurrentSelectionCard";

class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state={
      message:"loading data",
      zoom:8,
      initialCenter:{ lat: 47.444, lng: -122.176 },
      center:null
    };
  }

  componentDidMount(){
    axios
      .get("/places") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data.places); // Just the message
        this.setState({
          center: {
            lat:response.data.places.lat,
            lng:response.data.places.long},
          zoom:15
        });
      });
  }
  
  render() {
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          initialCenter={this.state.initialCenter}
          center={this.state.center}>
          <Marker position={this.state.center} />
        </Map>
        <CurrentSelectionCard />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`
})(GoogleMap);
