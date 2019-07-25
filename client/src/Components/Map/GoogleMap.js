import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";
// import axios from 'axios';
import React, { Component } from "react";

class GoogleMap extends Component {
  constructor(props){
    super(props);
    this.state={
      message:"loading data",
      zoom:12,
      initialCenter:{ lat: 49.2827, lng: -123.1207 },
      center:null
    };
  }
  
  render() {
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          initialCenter={this.state.initialCenter}
          center={this.state.center}>
          
          { this.props.neighbourhoods && 
            this.props.neighbourhoods.map((element)=>{
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

