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
            <DropdownItem
              onClick={() =>  {
                }
              }
            >
              Sunday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                }
              }
            >
              Monday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                }
              }
            >
              Tuesday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                }
              }
            >
              Wednesday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                }
              }
            >
              Thursday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
                }
              }
            >
              Friday
            </DropdownItem>
            <DropdownItem
              onClick={() =>  {
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
