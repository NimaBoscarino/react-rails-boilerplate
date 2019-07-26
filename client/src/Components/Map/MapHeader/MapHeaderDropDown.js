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
      <div className='filter'>
        <Form>
          <FormGroup>
            <Label for='exampleEmail'>Email</Label>
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='start-time'
            />
          </FormGroup>
          <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <Input
              type=''
              name='password'
              id='examplePassword'
              placeholder='end-time'
            />
          </FormGroup>
        </Form>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Days of Week</DropdownToggle>
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
