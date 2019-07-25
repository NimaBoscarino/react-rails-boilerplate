import React, {Component} from "react";
import HoodList from "./HoodList";


class HoodSidebar extends Component {
  constructor(props){
    super(props);
    this.state={
      placesLoaded:false,
      places:[]
    }
  }
  componentDidUpdate(){
    if (!this.state.placesLoaded && this.props.places) {
      this.setState({
        placesLoaded:true,
        places:this.props.places
      })
    }
  }
  render() {
    return (
      <div className='d-flex align-items-stretch hood-sidebar'>
        <ul className='list-group list-group-flush hood-list'>
          <li className='list-group-item hood-title-select'>Select Area</li>
          {
            this.props.neighbourhoods && 
            this.props.neighbourhoods.map(element=>{
              return <HoodList key={element.id} updateSelection={this.props.updateSelection} neighbourhood={element} places={this.state.places}/>
            })
          }
          
        </ul>
      </div>
    );
  }
}

export default HoodSidebar;
