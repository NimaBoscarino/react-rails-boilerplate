import { withScriptjs, withGoogleMap,GoogleMap, Polygon } from "react-google-maps";
import React, { Component } from "react";
import mapStyles from "./google-map-style.json"

class ReactGoogleMap extends Component {
  constructor(props){
    super(props);
    this.state={
      message:"loading data"
    };
  }
  
  render() {
    let GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 49.2827, lng: -123.1207 } }
        defaultZoom = { 12 }
        defaultOptions = {{styles:mapStyles}}
      >
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
                      this.props.clickNeighbourhood(element.id)
                  }}/>
              )
            })
        }
      </GoogleMap>
   ));
    if (this.props.mapCenterNeighbourhood) {
      GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { this.props.centerNeighbourhood.center }
          defaultZoom = { 14 }
          defaultOptions = {{styles:mapStyles}}
        >
          <Polygon
            paths={this.props.centerNeighbourhood.borderPoints}
            key={this.props.centerNeighbourhood.id}
            options={{
                fillColor: "#000",
                fillOpacity: 0.4,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: 1
            }}
            onClick={() => {
                
            }}
          />
        </GoogleMap>
     ));
    }
    return (
      <div className='map-container'>
        <GoogleMapExample
          containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          >
        </GoogleMapExample>
      </div>
    );
  }
}

export default ReactGoogleMap;