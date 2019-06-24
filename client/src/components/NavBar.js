import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';



class NavBar extends Component {
  render(){
    return(
      <Nav className="justify-content-end m-3" activeKey="/home">
        <Nav.Item>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Links to="/#home-why">Why</Links></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Links to="/#home-collective">The Collective</Links></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Links to="/#home-charities">Charities</Links></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        { this.props.user ?
          <ButtonToolbar>
            <Button className='mr-1' variant="outline-dark">Logout</Button>
            </ButtonToolbar>:
          <ButtonToolbar>
            <Button className='mr-1' variant="outline-dark"><Link to="/login">Login</Link></Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/register">Register</Link></Button>
          </ButtonToolbar>
        }
        </Nav.Item>
      </Nav>
    )
  }
}



export default NavBar;