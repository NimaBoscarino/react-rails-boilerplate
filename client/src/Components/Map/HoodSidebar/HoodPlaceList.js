import React, { Component } from "react";
import HotSpotIcon from "../../../global-assets/hotspot-score-icon-small.png";

class HoodPlaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "loading data"
    };
  }

  componentDidMount() {}

  makeScore(propped) {
    const yelp = propped.place.yelp_rating / 5 * 25
    const google = propped.place.rating / 5 * 25
    const busy = propped.place.popular_times[0].busy_value * 0.5

    return Math.ceil(yelp + google + busy)
  }

  render() {
    return (
      <li
        className='list-group-item hood-place-list-item'
        onClick={() => {
          this.props.onClick(this.props.place.id);
        }}>
        <div className='col hood-place-index-div'>
          <p className='index-number'>{this.props.index}.</p>
        </div>

        <div className='col hood-place-name-div'>
          <p className='hood-place-name'>{this.props.place.name}</p>
          <p className='hood-place-type'>
            {this.props.place.types
              .filter(element =>
                ["bar", "restaurant", "night_club"].includes(element)
              )
              .join(" / ")}
          </p>
        </div>
        <div className='col hood-place-hotspot-score-div'>
          <p className='hotspot-score-number-small'>
            {this.makeScore(this.props)}{" "}
            <span className='icon'>
              <img
                className='hotspot-score-icon-small'
                src={HotSpotIcon}
                alt={""}
              />
            </span>
          </p>
        </div>
      </li>
    );
  }
}

export default HoodPlaceList;
