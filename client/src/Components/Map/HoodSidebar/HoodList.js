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
    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("/places") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        this.setState({
          places: response.data.places
        });
      });
  }

  handleClick(id){
    this.props.updateSelection(id);
  }

  render() {
    return (
      <div>
        <li className='list-group-item hood-name-li'>
        <div className='col hood-col'>
        <h4  className='hood-title-text'>Gastown</h4>
        </div>

        <div className='col hotspot-score float-right'>
        <img className='hotspot-score-icon' src={HotSpotIcon} alt={""}/>
            <p className='hotspot-score-number'>87</p>
        </div>
        
        </li>
        { this.state.places &&
            this.state.places.map((place,index)=>{
              return (
                <HoodPlaceList place={place} index={index+1} key={place.id} onClick={this.handleClick}/>
              )
            })
          }
      </div>
    );
  }
}

export default HoodList;
