import React, { Component } from "react";
import Carousel from "./Carousel";

class AreaSelector extends Component {
  render() {
    return (
      <div id='AreaSelector'>
        <div className="flex area-selector">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default AreaSelector;
