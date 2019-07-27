import React, { Component } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Button } from "reactstrap";

class TripList extends Component {
  render() {
    return (
      <li
        className='list-group-item trip-name'
        onClick={() => {
          this.props.onClick(this.props.place.id);
        }}>
        <div className='place-name'>{this.props.place.name}</div>

        <div className='place-type'>
          {this.props.place.types
            .filter(element =>
              ["bar", "restaurant", "night_club"].includes(element)
            )
            .join(" / ")}
        </div>

        <div className='close-button-box'>
          <Button variant='primary' className='sidebar-button-close'>
            <IoIosCloseCircle className='icon-buttons-close ' />
          </Button>
        </div>
      </li>
    );
  }
}

export default TripList;
