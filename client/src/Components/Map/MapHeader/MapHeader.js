import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup, Button } from "reactstrap";
import MapDayFilter from "./DropdownDays";
import MapHourFilter from "../DropdownHours";
import MapHoodFilter from "./DropdownHood";
import { FaGlassCheers, FaPizzaSlice, FaMusic } from "react-icons/fa";


class MapHeader extends Component {
  render() {
    return (
      <div className='d-inline-flex p-2 justify-content-center map-header'>
      <div className='col hood-header-box'>
          <h4 className='selected-hood'>
            {this.props.currentNeighbourhood
              ? this.props.currentNeighbourhood.name
              : "Vancouver"}
          </h4>
        </div>

        <div className='col filter-box-div'> 
          <MapHoodFilter
            className='dropdown-buttons'
            neighbourhoods={this.props.neighbourhoods}
            clickNeighbourhood={this.props.clickNeighbourhood}
            resetNeighbourhood={this.props.resetNeighbourhood}
            currentNeighbourhood={this.props.currentNeighbourhood}
            changeShowOneHood={this.props.changeShowOneHood}
            removeMapCenterPlace={this.props.removeMapCenterPlace}
          />
          <p className='filter-prompt'>on a</p>
          <MapDayFilter
            className='dropdown-buttons'
            day={this.props.day}
            setDay={this.props.setDay}
          />
          <p className='filter-prompt'>around</p>
          <MapHourFilter
            className='dropdown-buttons'
            hour={this.props.hour}
            setHour={this.props.setHour}
          />
        </div>
  
        <div className='col button-row'>
          <ButtonToolbar
            className='button-toolbar'
            aria-label='Toolbar with button groups'>
       
            <ButtonGroup
              className='mr-2 filter-toolbar'
              aria-label='First group'>
              <Button
                className='filter-buttons restaurant-filter-button'
                onClick={() => {
                  this.props.filterPlaces("restaurant");
                }}>
                <FaPizzaSlice className='filter-icons' />
                Restaurants
              </Button>

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
              <Button
                className='filter-buttons club-filter-button'
                onClick={() => {
                  this.props.filterPlaces("reset");
                }}>
                Reset filter
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default MapHeader;
