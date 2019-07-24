import React, { Component } from "react";

class MapHeader extends Component {
  render() {
    return (
      <div className='d-flex map-header'>
        <div className='hood-header-box'>
          <h4 className='selected-hood'>Gastown</h4>
        </div>
      </div>
    );
  }
}

export default MapHeader;
