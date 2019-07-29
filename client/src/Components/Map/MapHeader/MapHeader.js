import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup, Button, Tooltip } from "reactstrap";
import MapDayFilter from "./DropdownDays";
import MapHourFilter from "./DropdownHours";
import MapHoodFilter from "./DropdownHood";
import { FaGlassCheers } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

class MapHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    console.log(this.props)
    return (
      <div className='d-inline-flex p-2 justify-content-center map-header'>
        <div className='col filter-box-div'>
          <p className='filter-prompt' >Show me</p>
          <MapHoodFilter
          neighbourhoods = {this.props.neighbourhoods}
          clickNeighbourhood={this.props.clickNeighbourhood}
          resetNeighbourhood={this.props.resetNeighbourhood}
          currentNeighbourhood={this.props.currentNeighbourhood}
          />
          <p className='filter-prompt'>on a</p>
          <MapDayFilter />
          <p className='filter-prompt'>around</p>
          <MapHourFilter />
          <Button className='heatmap-button' outline color='light' size='sm'>
            Turn off Heatmap
          </Button>
        </div>
        <div className='col hood-header-box'>
          <h4 className='selected-hood'>
            {this.props.currentNeighbourhood
              ? this.props.currentNeighbourhood.name
              : "Vancouver"}
          </h4>
        </div>
        <div className='col d-flex align-items-center filter-toolbar'>
          <div className='row button-row'>
            <ButtonToolbar
              className='button-toolbar'
              aria-label='Toolbar with button groups'>
              <ButtonGroup
                className='mr-2 filter-toolbar'
                aria-label='First group'>
                <span
                  style={{ textDecoration: "underline", color: "blue" }}
                  href='#'
                  id='Restaurants'>
                  <Button
                    className='filter-buttons restaurant-filter-button'
                    onClick={() => {
                      this.props.filterPlaces("restaurant");
                    }}>
                    <FaPizzaSlice className='filter-icons' />
                    Restaurants
                  </Button>
                </span>

                <Tooltip
                  placement='top'
                  isOpen={this.state.tooltipOpen}
                  target='Restaurants'
                  toggle={this.toggle}>
                  Restaurants
                </Tooltip>

                <Button
                  className='filter-buttons bar-filter-button'
                  onClick={() => {
                    this.props.filterPlaces("night_club");
                  }}>
                  <FaMusic className='filter-icons' />
                  Night Clubs
                </Button>
                <Button
                  className='filter-buttons club-filter-button'
                  onClick={() => {
                    this.props.filterPlaces("bar");
                  }}>
                  <FaGlassCheers className='filter-icons' />
                  Bars
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    );
  }
}

export default MapHeader;
