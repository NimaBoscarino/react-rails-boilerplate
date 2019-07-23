import React, {Component} from "react";
import TripList from "./TripList";
import HotSpotTripRating from "./HotSpotTripRating";
import TripButton from "./TripButton";

import { FaWineGlassAlt } from "react-icons/fa";

class TripSidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      selectionList:[]
    }
  }
  componentDidUpdate(prevProps){
    if (prevProps.selectionList.length!==this.state.selectionList.length){
      this.setState({
        selectionList:this.props.selectionList
      })
      console.log(this.state.selectionList)
    }
  }
  render(){
  return (
    <div className='d-flex'>
      <div className='align-items-stretch planner-sidebar'>
        <ul className='list-group list-group-flush trip-list'>
          <li className='list-group-item trip-title'>
            <FaWineGlassAlt /> Your Night
          </li>
          {
            this.state.selectionList.map((place)=>{
              return (<TripList key={place.id} place={place} onClick={this.props.delete}/>)
            })
          }
          
          <TripButton />
        </ul>

        <HotSpotTripRating />
      </div>
    </div>
  );}
}

export default TripSidebar;
