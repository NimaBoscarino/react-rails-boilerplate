import React, { Component } from "react";
import axios from "axios";
import HotSpotIcon from "../../../global-assets/hotspot-score-icon-small.png";
import HoodPlaceList from "./HoodPlaceList";



class HoodList extends Component {


  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  componentDidMount() {
    axios
      .get("/places") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.places); // Just the message
        this.setState({
          places: response.data.places
        });
      });
  }

  render() {
    return (
      <div>
        <li className='list-group-item hood-name'>
        <div className='hood-title'>
        <h4  className='hood-title'>Gastown</h4>
        </div>
        
          <div className='hotspot-score float-right'>
            <img className='hotspot-score-icon' src={HotSpotIcon} />
            <p className='hotspot-score-number'>87</p>
          </div>
        </li>
        { this.state.places &&
            this.state.places.map(place=>{
              return (
                <HoodPlaceList place={place}/>
              )
            })
          }
      </div>
    );
  }
}

export default HoodList;
