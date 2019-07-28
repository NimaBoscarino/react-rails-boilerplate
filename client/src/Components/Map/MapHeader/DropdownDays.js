import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class DropdownDays extends React.Component {
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
          <DropdownToggle caret>day</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Sunday</DropdownItem>
            <DropdownItem>Monday</DropdownItem>
            <DropdownItem>Tuesday</DropdownItem>
            <DropdownItem>Wednesday</DropdownItem>
            <DropdownItem>Thursday</DropdownItem>
            <DropdownItem>Friday</DropdownItem>
            <DropdownItem>Saturday</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
