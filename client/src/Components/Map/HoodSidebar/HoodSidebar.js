import React from "react";
import HoodList from "./HoodList";

function HoodSidebar() {
  return (
    <div className='d-flex align-items-stretch hood-sidebar'>
      <ul className='list-group list-group-flush hood-list'>
        <li className='list-group-item hood-title'>Neighbourhoods</li>
        <HoodList />
        <HoodList />
        <HoodList />
        <HoodList />
        <HoodList />
        <HoodList />
      </ul>
    </div>
  );
}

export default HoodSidebar;
