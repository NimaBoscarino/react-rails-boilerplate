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
            <Redirect to='/dashboard'/>
            <form onSubmit={handleLogout} >
              <Button type="submit" className='mr-1' variant="outline-dark">Logout</Button>
            </form>
            <Button className='mr-1' variant="outline-dark"><Link to="/dashboard">Dashboard</Link></Button>
            <Button className='mr-1' variant="outline-dark">Settings</Button>
          </ButtonToolbar>:
          <ButtonToolbar>
            <Redirect to='/'/>

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