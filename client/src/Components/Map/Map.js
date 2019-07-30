import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar/HoodSidebar";
import TripSidebar from "./TripSidebar/TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard/CurrentSelectionCard";
import GoogleMap from "./ReactGoogleMap";
import MapHeader from "./MapHeader/MapHeader";
import HeatMapSlider from "./HeatMapSlider/HeatMapSlider";
import HeatMapToggle from "./HeatMapToggle";
import axios from "axios";
/*global google*/

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
      showHeatmap: true,
      showMarkers: true,
    };
    this.updateCurrentSelection = this.updateCurrentSelection.bind(this);
    this.deleteSelectedPlace = this.deleteSelectedPlace.bind(this);
    this.addCurrentSelection = this.addCurrentSelection.bind(this);
    this.clickNeighbourhood = this.clickNeighbourhood.bind(this);
    this.resetNeighbourhood = this.resetNeighbourhood.bind(this);
    this.changeShowOneHood = this.changeShowOneHood.bind(this);
    this.toggleHeatmap = this.toggleHeatmap.bind(this);
    this.removeMapCenterPlace = this.removeMapCenterPlace.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.toggleMarkers = this.toggleMarkers.bind(this);
  }
  updateCurrentSelection(id) {
    const currentPlace = this.props.places.filter(place => place.id === id)[0];
    this.setState({
      currentSelection: currentPlace,
      showSelectionCard: true,
      mapCenterPlace: true,
      centerPlace: currentPlace,
      mapCenterNeighbourhood: false
    });
  }
  addCurrentSelection(id) {
    if (!this.state.selectionList.filter(element => element.id === id).length) {
      this.state.selectionList.push(
        this.props.places.filter(element => element.id === id)[0]
      );
    }
    this.setState({
      selectionList: this.state.selectionList
    });
  }
  deleteSelectedPlace(id) {
    const list = this.state.selectionList.filter(element => element.id !== id);
    this.setState({
      selectionList: list
    });
  }

  clickNeighbourhood(id) {
    if (this.props.places) {
      if (
        !this.state.centerNeighbourhood ||
        this.state.centerNeighbourhood.id !== id
      ) {
        this.setState({
          mapCenterNeighbourhood: true,
          centerNeighbourhood: this.props.neighbourhoods.filter(
            element => element.id === id
          )[0],
          mapCenterPlace: false,
          centerPlace: null
        });
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
    });
  }

  removeMapCenterPlace() {
    this.setState({
        mapCenterPlace: false,
        showSelectionCard: false
    })
  }

  changeShowOneHood(val) {
    this.setState({
      showOneHood: val
    });
  }

  toggleHeatmap() {
    this.setState({
      showHeatmap: !this.state.showHeatmap
    });
  }

  handleSlider(val){
      if (val<=70){
          val=val/10+17
      } else {
          val=val/10-7
      }
      this.setState({
          updatedHeatmap:this.updatedHeatmap[`${val}`]
      })
  }

  componentDidMount(){
    this.getHeatmapData()
  }
    componentDidUpdate(prevProps) {
        if (prevProps.day!==this.props.day){
            this.getHeatmapData();
            this.setState({
                updatedHeatmap:null
            })
        }
    }

    getHeatmapData(){
        axios.get(`api/popular/day/${this.props.day}`).then(response=>{
            const updatedPopularTimes=response.data.popular_times;
            const data={};
            updatedPopularTimes.forEach(place=>{
                place.popular_times.forEach(popular=>{
                    if (!data[`${popular.hour_id}`]){
                        data[`${popular.hour_id}`]=[]
                    }
                    data[`${popular.hour_id}`].push( {
                        location: new google.maps.LatLng(place.lat, place.long),
                        weight: popular.busy_value
                    })
                })
            })
            this.updatedHeatmap=data;

        })
    }

    toggleMarkers(){
        this.setState({
            showMarkers: !this.state.showMarkers
          });
    }

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
            day = {this.props.day}
            hour = {this.props.hour}
            setDay = {this.props.setDay}
            setHour = {this.props.setHour}
            toggleHeatmap = {this.toggleHeatmap}
            removeMapCenterPlace={this.removeMapCenterPlace}
        />
        <HeatMapToggle toggleHeatmap = {this.toggleHeatmap}/>
        <HeatMapSlider handleChange={this.handleSlider}/>
        <div className='d-flex justify-content-between h-100 w-100'>
          <GoogleMap
            neighbourhoods={this.props.neighbourhoods}
            places={this.props.places}
            clickNeighbourhood={this.clickNeighbourhood}
            mapCenterNeighbourhood={this.state.mapCenterNeighbourhood}
            centerNeighbourhood={this.state.centerNeighbourhood}
            updateSelection={this.updateCurrentSelection}
            mapCenterPlace={this.state.mapCenterPlace}
            centerPlace={this.state.centerPlace}
            selectionList={this.state.selectionList}
            showHeatmap={this.state.showHeatmap}
            heatmapData = {this.state.updatedHeatmap}
            showMarkers = {this.state.showMarkers}
          />
          <HoodSidebar
            updateSelection={this.updateCurrentSelection}
            places={this.props.places}
            neighbourhoods={this.props.neighbourhoods}
            clickNeighbourhood={this.clickNeighbourhood}
            showOneHoodSide={this.state.showOneHood}
          />
          <TripSidebar
            selectionList={this.state.selectionList}
            delete={this.deleteSelectedPlace}
            showMyNight={this.props.showMyNight}
          />

          {this.state.showSelectionCard && (
            <CurrentSelectionCard
              currentSelection={this.state.currentSelection}
              addSelection={this.addCurrentSelection}
              neighbourhoods={this.props.neighbourhoods}
              places={this.props.places}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Map;
