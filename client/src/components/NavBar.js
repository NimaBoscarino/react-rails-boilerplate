import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Nav from 'react-bootstrap/Nav';


class NavBar extends Component {
  render(){
    return(
      <Nav className="justify-content-end m-3" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#home-why">Why</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">The Collective</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Charities</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        { this.props.user ?
          <ButtonToolbar>
            <Button className='mr-1' variant="outline-dark">Logout</Button>
            </ButtonToolbar>:
          <ButtonToolbar>
            <Button className='mr-1' variant="outline-dark">Login</Button>
            <Button className='mr-1' variant="outline-dark">Register</Button>
          </ButtonToolbar>
        }
        </Nav.Item>
      </Nav>
    )
  }
}



export default NavBar;