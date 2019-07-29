import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from "react-google-maps";
import React, { Component } from "react";
import mapStyles from "./google-map-style.json";

// import Marker from "./Marker/Marker";
// \import CurrentSelection from "../../global-assets/hotspot-score-icon-small.png";

class ReactGoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "loading data"
    };
  }

  render() {
    let GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
        defaultZoom={14}
        defaultOptions={{ styles: mapStyles }}>
        {this.props.neighbourhoods &&
          this.props.neighbourhoods.map(element => {
            return (
              <Polygon
                paths={element.borderPoints}
                key={element.id}
                label={`${element.name}`}
                options={{
                  fillColor: "#000",
                  fillOpacity: 0.4,
                  strokeColor: "#ff5a00",
                  strokeOpacity: 1,
                  strokeWeight: 2
                }}
                onClick={() => {
                  this.props.clickNeighbourhood(element.id);
                }}
              />
            );
          })}
      </GoogleMap>
    ));
    if (this.props.mapCenterNeighbourhood) {
      const icon = {
        url: "https://i.ibb.co/sRgtpRC/icon-map.png"
      };
      GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter={this.props.centerNeighbourhood.center}
          defaultZoom={14}
          defaultOptions={{ styles: mapStyles }}>
          <Polygon
            paths={this.props.centerNeighbourhood.borderPoints}
            key={this.props.centerNeighbourhood.id}
            options={{
              fillColor: "#ff5a00",
              fillOpacity: 0.2,
              strokeColor: "#ff5a00",
              strokeOpacity: 1,
              strokeWeight: 2
            }}
            onClick={() => {}}
          />
          {this.props.places
            .filter(
              el => el.neighbourhood_id === this.props.centerNeighbourhood.id
            )
            .map(place => {
              return (
                <Marker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.long }}
                  icon={icon}
                  onClick={() => {
                    this.props.updateSelection(place.id);
                  }}
                />
              );
            })}
        </GoogleMap>
      ));
    }
    if (this.props.mapCenterPlace) {
      const currentSelection = {
        url: "https://i.ibb.co/sRgtpRC/icon-map.png"
      };

      const onTheList = "https://i.ibb.co/sRgtpRC/icon-map.png";

      GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{
            lat: this.props.centerPlace.lat,
            lng: this.props.centerPlace.long
          }}
          defaultZoom={14}
          defaultOptions={{ styles: mapStyles }}>
          {this.props.places
            .filter(
              el => el.neighbourhood_id === this.props.centerNeighbourhood.id
            )
            .map(place => {
              let image = null;
              if (place.id === this.props.centerPlace.id) {
                image = currentSelection;
              }
              if (
                this.props.selectionList.map(el => el.id).includes(place.id)
              ) {
                image = onTheList;
              }
              return (
                <Marker
                  key={place.id}
                  position={{ lat: place.lat, lng: place.long }}
                  icon={image && image}
                  // label={`${place.rating}`}
                  labelClass={".label-style"}
                  onClick={() => {
                    this.props.updateSelection(place.id);
                  }}
                />
              );
            })}
        </GoogleMap>
      ));
    }
    return (
      <div className='map-container'>
        <GoogleMapExample
          containerElement={<div style={{ height: `100%`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default ReactGoogleMap;
