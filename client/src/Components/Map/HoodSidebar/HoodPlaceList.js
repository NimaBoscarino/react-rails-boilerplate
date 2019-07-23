import React, { Component } from "react";
import { IoMdStarOutline } from "react-icons/io";

class HoodPlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "loading data"
    };
  }

  componentDidMount() {}
  render() {
    return (
      <li className='list-group-item hood-place-list-item'>
        <div className='hood-place-name-div'>
          <p className='hood-place-name'>{this.props.place.name}</p>
        </div>
        <div className='hood-place-hotspot-score'>
          <p className='hotspot-score-number'>
            {this.props.place.rating}{" "}
            <span className='icon'>
              <IoMdStarOutline />
            </span>
          </p>
        </div>
      </li>
    );
  }
}

export default HoodPlaceList;
