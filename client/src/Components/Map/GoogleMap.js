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
        const places=this.processDataPlaces(response.data.places);
        this.setState({
          places:places,
          center: places[0].coordinates,
          zoom:13
        });
      });
  }
  
  processDataPlaces(placesData){
    let places = placesData.map(place=>{
      return { 
        id:place.id,
        name:place.name,
        coordinates: {
          lat:place.lat, 
          lng:place.long},
        address:place.address
      }
    });
    return places;
  }
  
  render() {
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          initialCenter={this.state.initialCenter}
          center={this.state.center}>
          
          { this.state.places && 
            this.state.places.map((place)=>{
              return (
                <Marker position={place.coordinates} key={place.id} />
              )
            })
          }
          
        </Map>
        <CurrentSelectionCard />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`
})(GoogleMap);

