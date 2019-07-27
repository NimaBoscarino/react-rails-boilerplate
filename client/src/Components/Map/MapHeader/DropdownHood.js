import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class DropdownHoods extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className='heatmap-filter'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {" "}
            {this.props.currentNeighbourhood
              ? this.props.currentNeighbourhood.name
              : "Vancouver"}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Gastown</DropdownItem>
            <DropdownItem>Yaletown</DropdownItem>
            <DropdownItem>Downtown</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
