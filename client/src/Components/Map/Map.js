import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar/HoodSidebar";
import TripSidebar from "./TripSidebar/TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard/CurrentSelectionCard";
import GoogleMap from "./GoogleMap";
import MapHeader from "./MapHeader/MapHeader";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: null,
      selectionList: [],
      showSelectionCard:false,
    };
    this.updateCurrentSelection = this.updateCurrentSelection.bind(this);
    this.deleteSelectedPlace = this.deleteSelectedPlace.bind(this);
    this.addCurrentSelection = this.addCurrentSelection.bind(this);
  }
  updateCurrentSelection(id) {
    this.setState({
      currentSelection: this.props.places.filter(place=>place.id===id)[0],
      showSelectionCard:true
    });
  }
  addCurrentSelection(id) {
    if (!this.state.selectionList.filter(element => element.id === id).length
    ) {
      this.state.selectionList.push(this.props.places.filter(element=>element.id===id)[0]);
    }
    this.setState({
      selectionList: this.state.selectionList
    });
  }
  deleteSelectedPlace(id) {
    // const list=this.state.selectionList.filter(element=>element.id!==id)
    // this.setState({
    //   selectionList:list
    // })
  }
  componentDidMount() {}
  render() {
    return (
      <div id='Map'>
        <MapHeader />
        <div className='d-flex justify-content-between h-100 w-100'>
          <GoogleMap neighbourhoods={this.props.neighbourhoods}/>
          <HoodSidebar updateSelection={this.updateCurrentSelection} places={this.props.places} neighbourhoods={this.props.neighbourhoods} />
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
