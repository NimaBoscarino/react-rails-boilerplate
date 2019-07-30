import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar/HoodSidebar";
import TripSidebar from "./TripSidebar/TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard/CurrentSelectionCard";
import GoogleMap from "./ReactGoogleMap";
import MapHeader from "./MapHeader/MapHeader";
import HeatMapSlider from './HeatMapSlider/HeatMapSlider';

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
            showOneHood: null,
            showHeatmap:false
        };
        this.updateCurrentSelection = this.updateCurrentSelection.bind(this);
        this.deleteSelectedPlace = this.deleteSelectedPlace.bind(this);
        this.addCurrentSelection = this.addCurrentSelection.bind(this);
        this.clickNeighbourhood = this.clickNeighbourhood.bind(this);
        this.resetNeighbourhood = this.resetNeighbourhood.bind(this);
        this.changeShowOneHood = this.changeShowOneHood.bind(this);
        this.toggleHeatmap = this.toggleHeatmap.bind(this);
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
            selectionList: this.state.selectionList        });
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

    resetNeighbourhood() {
        this.setState({
            mapCenterNeighbourhood: false,
            centerPlace: { lat: 49.2827, long: -123.1207 },
            centerNeighbourhood: null
        })
    }

    changeShowOneHood(val) {
        this.setState({
            showOneHood: val
        })
    }

    toggleHeatmap(){
        this.setState({
            showHeatmap:!this.state.showHeatmap
        })
    }

    componentDidMount() {}
    render() {
        return (
            <div id='Map'>
        <MapHeader
        currentNeighbourhood={this.state.centerNeighbourhood}
        filterPlaces={this.props.filterPlaces}
        neighbourhoods={this.props.neighbourhoods}
        clickNeighbourhood={this.clickNeighbourhood}
        resetNeighbourhood={this.resetNeighbourhood}
        changeShowOneHood={this.changeShowOneHood}
        toggleHeatmap = {this.toggleHeatmap}
        />
        <HeatMapSlider />
        <div className='d-flex justify-content-between h-100 w-100'>
          <GoogleMap
            neighbourhoods = { this.props.neighbourhoods }
            places={this.props.places}
            clickNeighbourhood={this.clickNeighbourhood}
            mapCenterNeighbourhood = {this.state.mapCenterNeighbourhood}
            centerNeighbourhood = {this.state.centerNeighbourhood}
            updateSelection = {this.updateCurrentSelection}
            mapCenterPlace = {this.state.mapCenterPlace}
            centerPlace = {this.state.centerPlace}
            selectionList = {this.state.selectionList}
            showHeatmap = {this.state.showHeatmap}
          />
          <HoodSidebar
            updateSelection={this.updateCurrentSelection}
            places={this.props.places}
            neighbourhoods={this.props.neighbourhoods}
            clickNeighbourhood = {this.clickNeighbourhood}
            showOneHoodSide = {this.state.showOneHood}
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