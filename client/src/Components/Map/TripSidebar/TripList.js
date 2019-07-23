import React, {Component} from "react";
import { IoIosCloseCircle } from "react-icons/io";

class TripList extends Component {
  render(){
  return (
  
    <li className='list-group-item trip-name' onClick={()=>{this.props.onClick(this.props.place.id)}}>
      {this.props.place.name}
      <IoIosCloseCircle />
    </li>
  
  );}
}

export default TripList;
