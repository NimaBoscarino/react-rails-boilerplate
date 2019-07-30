import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TimeKeeper from 'react-timekeeper'

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

  wordTime(num) {
    num--
    if (num === 12) {
      return 12 + " PM"
    }
    if (num === 0) {
      return 12 + " AM"
    }
    if (num > 12) {
      return num - 12 + " PM"
    }
    else return num + " AM"
  }

  render() {
    return (
      <div className='heatmap-filter'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.wordTime(this.props.hour)}
          </DropdownToggle>
          <DropdownMenu>
            <TimeKeeper
              time={this.props.hour-1 + ":00"}
              onChange={this.props.setHour}
            />
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
