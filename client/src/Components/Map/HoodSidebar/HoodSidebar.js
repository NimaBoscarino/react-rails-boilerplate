import React, { Component } from "react";
import HoodList from "./HoodList";


class HoodSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesLoaded: false,
      places: []
    };
  }
  componentDidUpdate() {
    if (!this.state.placesLoaded && this.props.places) {
      this.setState({
        placesLoaded: true,
        places: this.props.places
      });
    }
  }
  render() {
    console.log(this.props)
    let hoodsToDraw = this.props.neighbourhoods;
    if (this.props.showOneHoodSide) {
      hoodsToDraw = hoodsToDraw.filter(neighbourhood => neighbourhood.id === this.props.showOneHoodSide)
    }
    return (
      <div className='d-flex align-items-stretch hood-sidebar'>
        <ul className='list-group list-group-flush hood-list'>
          <li className='list-group-item hood-title-select'>
            Explore Areas
          </li>

          {hoodsToDraw &&
           hoodsToDraw.map(element => {
              return (
                <HoodList
                  key={element.id}
                  updateSelection={this.props.updateSelection}
                  neighbourhood={element}
                  places={this.state.places}
                  clickNeighbourhood = {this.props.clickNeighbourhood}
                  showOneHoodSide = {this.props.showOneHoodSide}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default HoodSidebar;
