import React from "react";
import TripList from "./TripList";
import HotSpotTripRating from "./HotSpotTripRating";
import TripButton from "./TripButton";

import { FaWineGlassAlt } from "react-icons/fa";

function TripSidebar() {
  return (
    <div className='d-flex'>
      <div className='align-items-stretch planner-sidebar'>
        <ul className='list-group list-group-flush trip-list'>
          <li className='list-group-item trip-title'>
            <FaWineGlassAlt /> Your Night
          </li>
          <TripList />
          <TripList />
          <TripList />
          <TripList />
          <TripList />
          <TripButton />
        </ul>

        <HotSpotTripRating />
      </div>
    </div>
  );
}

export default TripSidebar;
