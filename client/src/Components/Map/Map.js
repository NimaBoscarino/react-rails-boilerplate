import React, { Component } from "react";
import HoodSidebar from "./HoodSidebar/HoodSidebar";
import TripSidebar from "./TripSidebar/TripSidebar";
import CurrentSelectionCard from "./CurrentSelectionCard";
import GoogleMap from "./GoogleMap";
import axios from "axios";

class Map extends Component {
  constructor(props){
    super(props);
    const currentSelection = {
      name: 'The Gastown Pub',
      googleReviewNumber:264,
      googleReviewScore:87
    }
    this.state={
      currentSelection:currentSelection,
      selectionList:[]
    }
    this.updateCurrentSelection=this.updateCurrentSelection.bind(this);
    this.deleteSelectedPlace=this.deleteSelectedPlace.bind(this);
  }
  updateCurrentSelection(id){
    axios
      .get(`/places/${id}`) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const newSelection = {
          name: response.data.place.name,
          googleReviewNumber: response.data.place.rating_n,
          googleReviewScore:response.data.place.rating
        }
        if (!this.state.selectionList.filter(element=>element.id===id).length) {
          this.state.selectionList.push(response.data.place)
        }
        this.setState({
          currentSelection:newSelection,
          selectionList: this.state.selectionList
        });
      });
  }
  deleteSelectedPlace(id){
    // const list=this.state.selectionList.filter(element=>element.id!==id)
    // this.setState({
    //   selectionList:list
    // })
  }
  componentDidMount() {
  }
  render() {
    return (
      <div id='Map'>
        <h1 className='hood-main-title'>Gastown</h1>
        <div className='d-flex justify-content-between h-100 w-100'>
          <GoogleMap />
          <HoodSidebar updateSelection={this.updateCurrentSelection}/>
          <TripSidebar selectionList={this.state.selectionList} delete={this.deleteSelectedPlace}/>
          <CurrentSelectionCard currentSelection={this.state.currentSelection} />

        </div>
      </div>
    );
  }
}

export default Map;
