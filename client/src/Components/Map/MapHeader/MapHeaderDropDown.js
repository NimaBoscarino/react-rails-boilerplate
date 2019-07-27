import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class Example extends React.Component {
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
      <div className='filter-div'>
        <div className='form-div'>
          <Form>
            <div className='start-time-div'>
              <FormGroup>
                <Label for='start-time'>Start Time</Label>
                <Input
                  type=''
                  name='start-time'
                  id='start-time'
                  placeholder='start-time'
                />
              </FormGroup>
            </div>
            <div className='start-time-div'>
              <FormGroup>
                <Label for='end-time'>End Time</Label>
                <Input
                  type=''
                  name='password'
                  id='end-time'
                  placeholder='end-time'
                />
              </FormGroup>
            </div>
            <div className='weekday-selector-div'>
              <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                className='weekday-selector-div'>
                <DropdownToggle caret>Day of Week</DropdownToggle>
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
            <Button color='secondary'>Submit</Button>{" "}
          </Form>
        </div>
      </div>
    );
  }
}
