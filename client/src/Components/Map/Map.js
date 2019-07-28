import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar/HoodSidebar";
import TripSidebar from "./TripSidebar/TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard/CurrentSelectionCard";
import GoogleMap from "./ReactGoogleMap";
import MapHeader from "./MapHeader/MapHeader";

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelection: null,
            selectionList: [],
            showSelectionCard: false,
            centerNeighbourhood: null,
            mapCenterNeighbourhood: false,
            centerPlace: null,
            mapCenterPlace: false,
        };
        this.updateCurrentSelection = this.updateCurrentSelection.bind(this);
        this.deleteSelectedPlace = this.deleteSelectedPlace.bind(this);
        this.addCurrentSelection = this.addCurrentSelection.bind(this);
        this.clickNeighbourhood = this.clickNeighbourhood.bind(this);
        this.filterPlaces = this.filterPlaces.bind(this);
    }
    updateCurrentSelection(id) {
        const currentPlace = this.props.places.filter(place => place.id === id)[0]
        this.setState({
            currentSelection: currentPlace,
            showSelectionCard: true,
            mapCenterPlace: true,
            centerPlace: currentPlace,
            mapCenterNeighbourhood: false,
        });
    }
    addCurrentSelection(id) {
        if (!this.state.selectionList.filter(element => element.id === id).length) {
            this.state.selectionList.push(this.props.places.filter(element => element.id === id)[0]);
        }
        this.setState({
            selectionList: this.state.selectionList
        });
    }
    deleteSelectedPlace(id) {
        const list = this.state.selectionList.filter(element => element.id !== id)
        this.setState({
            selectionList: list
        })
    }

    clickNeighbourhood(id) {
        if (this.props.places) {
            if (!this.state.centerNeighbourhood || this.state.centerNeighbourhood.id !== id) {
                this.setState({
                    mapCenterNeighbourhood: true,
                    centerNeighbourhood: this.props.neighbourhoods.filter(element => element.id === id)[0],
                    mapCenterPlace: false,
                    centerPlace: null,
                })
            }
        } else {
            console.log("Loading data");
        }
    }

    filterPlaces(type) {
        console.log(`${type} is clicked`);
    }
    componentDidMount() {}
    render() {
        return (
            <div id='Map'>
        <MapHeader currentNeighbourhood={this.state.centerNeighbourhood} filterPlaces={this.filterPlaces}/>
        <div className='d-flex justify-content-between h-100 w-100'>
          <GoogleMap
            neighbourhoods={this.props.neighbourhoods}
            places={this.props.places}
            clickNeighbourhood={this.clickNeighbourhood}
            mapCenterNeighbourhood = {this.state.mapCenterNeighbourhood}
            centerNeighbourhood = {this.state.centerNeighbourhood}
            updateSelection = {this.updateCurrentSelection}
            mapCenterPlace = {this.state.mapCenterPlace}
            centerPlace = {this.state.centerPlace}
            selectionList = {this.state.selectionList}
          />
          <HoodSidebar
            updateSelection={this.updateCurrentSelection}
            places={this.props.places}
            neighbourhoods={this.props.neighbourhoods}
            clickNeighbourhood = {this.clickNeighbourhood}
          />
          <TripSidebar
            selectionList={this.state.selectionList}
            delete={this.deleteSelectedPlace}
            showMyNight={this.props.showMyNight}
          />

          {
            this.state.showSelectionCard &&
            <CurrentSelectionCard
              currentSelection={this.state.currentSelection}
              addSelection={this.addCurrentSelection}
            />
          }

        </div>
      </div>
        );
    }
}

export default Map;