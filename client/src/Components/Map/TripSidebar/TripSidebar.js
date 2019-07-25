import React, { Component } from "react";
import { Button } from "reactstrap";

import TripList from "./TripList";
import HotSpotTripRating from "./HotSpotTripRating";
import TripButton from "./TripButton";

import { FaWineGlassAlt } from "react-icons/fa";

class TripSidebar extends Component {
  render() {
    return (
      <div className='d-flex'>
        <div className='align-items-stretch planner-sidebar'>
          <ul className='list-group list-group-flush trip-list'>
            <li className='list-group-item trip-title'>
              <FaWineGlassAlt /> Your Night
            </li>
            { this.props.selectionList &&
              this.props.selectionList.map(place => {
              return (
                <TripList
                  key={place.id}
                  place={place}
                  onClick={this.props.delete}
                />
              );
            })}

            <TripButton />
          </ul>

          <Button variant='primary' block onClick={()=>{this.props.selectionList.length && this.props.showMyNight(this.props.selectionList)}}>Generate Night</Button>
          <Button variant='primary' block>See On Map</Button>
          <Button variant='primary' block>Create Plan</Button>

          <HotSpotTripRating />
        </div>
      </div>
    );
  }
}

export default TripSidebar;
