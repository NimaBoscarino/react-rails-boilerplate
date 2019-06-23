import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


class NavBar extends Component {
  render(){
    return(
      <Nav className="justify-content-end m-3" activeKey="/home">

        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link >About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Why</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">The Collective</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Charities</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <ButtonToolbar>
            <Button className='mr-1' variant="outline-dark">Login</Button>
            <Button className='mr-1' variant="outline-dark">Register</Button>
            <Button className='mr-1' variant="outline-dark" disabled>Logout</Button>
          </ButtonToolbar>
        </Nav.Item>
      </Nav>
    )
  }
}



export default NavBar;