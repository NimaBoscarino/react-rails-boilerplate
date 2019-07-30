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

  getDayFromProp(num) {
    switch(num) {
      case 1:
        return "Monday"
      case 2:
        return "Tuesday"
      case 3:
        return "Wednesday"
      case 4:
        return "Thursday"
      case 5:
        return "Friday"
      case 6:
        return "Saturday"
      case 7:
        return "Sunday"
      default:
        return "Monday"
    }
  }

  render() {
    return (
      <div className='dropdown-buttons'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className='drop-down-toggle' caret>
            {this.getDayFromProp(this.props.day)}
          </DropdownToggle>
          <DropdownMenu className='drop-down-menu'>
            <DropdownItem
              onClick={() =>  {
                this.props.setDay(7)
                }
              }
            >
              Sunday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                  this.props.setDay(1)
                }
              }
            >
              Monday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                  this.props.setDay(2)
                }
              }
            >
              Tuesday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                  this.props.setDay(3)
                }
              }
            >
              Wednesday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                  this.props.setDay(4)
                }
              }
            >
              Thursday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                  this.props.setDay(5)
                }
              }
            >
              Friday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                  this.props.setDay(6)
                }
              }
            >
              Saturday
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
