import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class DropdownHours extends React.Component {
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
          <DropdownToggle caret>time</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>6PM</DropdownItem>
            <DropdownItem>7PM</DropdownItem>
            <DropdownItem>8PM</DropdownItem>
            <DropdownItem>9PM</DropdownItem>
            <DropdownItem>10PM</DropdownItem>
            <DropdownItem>11PM</DropdownItem>
            <DropdownItem>12PM</DropdownItem>
            <DropdownItem>1AM</DropdownItem>
            <DropdownItem>2AM</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
