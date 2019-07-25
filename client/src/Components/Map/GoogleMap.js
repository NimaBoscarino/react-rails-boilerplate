import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";
import axios from 'axios';
import React, { Component } from "react";

class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state={
      message:"loading data",
      zoom:8,
      initialCenter:{ lat: 49.2827, lng: -123.1207 },
      center:null
    };
  }

  componentDidMount(){
    axios
      .get("/neighbourhoods") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const neighbourhoods=this.processDataNeighbourhoods(response.data.neighbourhoods);
        this.setState({
          neighbourhoods: neighbourhoods,
          // center: {lat: neighbourhoods[0].centerlat, lng:neighbourhoods[0].centerlng},
          zoom:12
        });
      });
  }
  processDataNeighbourhoods(neighbourhoodData){
    return neighbourhoodData.map(element=>{
      return { 
        id:element.id,
        name:element.name,
        center: {
          lat:element.centerlat, 
          lng:element.centerlong},
        borderPoints:element.border_points
      }
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
          
          { this.state.neighbourhoods && 
            this.state.neighbourhoods.map((element)=>{
              return (
                <Polygon
                  paths={element.borderPoints}
                  key={element.id}
                  options={{
                      fillColor: "#000",
                      fillOpacity: 0.4,
                      strokeColor: "#000",
                      strokeOpacity: 1,
                      strokeWeight: 1
                  }}
                  onClick={() => {
                      console.log("ahmet")
                  }}/>
              )
            })
          }
      
          
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAP_APIKEY}`
})(GoogleMap);

