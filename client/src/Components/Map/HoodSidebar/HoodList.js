import React, { Component } from "react";
// import axios from "axios";
import HotSpotIcon from "../../../global-assets/hotspot-score-icon-small.png";
import HoodPlaceList from "./HoodPlaceList";



class HoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
      showListPlaces:false
    };
    this.handleClick=this.handleClick.bind(this);
    this.clickTogglePlaces=this.clickTogglePlaces.bind(this);
  }

  componentDidMount() {
  }

  handleClick(id){
    this.props.updateSelection(id);
  }

  clickTogglePlaces(){
    this.setState({
      showListPlaces: !this.state.showListPlaces
    })
  }

  render() {
    return (
      <div>
        <li className='list-group-item hood-name-li'>
        <div className='col hood-col' onClick={()=>{this.clickTogglePlaces()}}>
        <h4  className='hood-title-text'>{this.props.neighbourhood.name}</h4>
        </div>

        <div className='col hotspot-score float-right'>
        <img className='hotspot-score-icon' src={HotSpotIcon} alt={""}/>
            <p className='hotspot-score-number'>87</p>
        </div>
        
        </li>
        { this.state.showListPlaces &&
            this.props.places.filter(place=>place.neighbourhood_id===this.props.neighbourhood.id)
              .map((place,index)=>{

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
