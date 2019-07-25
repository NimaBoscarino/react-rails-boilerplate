import React, {Component} from "react";
import HoodList from "./HoodList";


class HoodSidebar extends Component {
  render() {
    return (
      <div className='d-flex align-items-stretch hood-sidebar'>
        <ul className='list-group list-group-flush hood-list'>
          <li className='list-group-item hood-title-select'>Select Area</li>
          {
            this.props.neighbourhoods && this.props.places && 
            this.props.neighbourhoods.map(element=>{
              const thisHoodPlaces = this.props.places.filter(place=>place.neighbourhood_id===element.id);
              return <HoodList key={element.id} updateSelection={this.props.updateSelection} neighbourhood={element} places={thisHoodPlaces}/>
            })
          }
          
        </ul>
      </div>
    );
  }
}

export default HoodSidebar;
