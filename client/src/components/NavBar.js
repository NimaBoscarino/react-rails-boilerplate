import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';


class NavBar extends Component {
  render() {
    const {
      mainState: state,
      handleLogout,
      handleVoteSelection,
      getTransactions,
    } = this.props;

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
        {state.isLoggedIn ? (
          <ButtonToolbar>
            <form onSubmit={getTransactions} >
            <Button type="submit" className='mr-1' variant="outline-dark">Transactions</Button>
            </form>
            <form onSubmit={handleLogout} >
            <Button type="submit" className='mr-1' variant="outline-dark">Logout</Button>
            </form>
            <form onSubmit={handleVoteSelection} >
              <Button type="submit" className='mr-1' variant="outline-dark">Votes</Button>
            </form>
            <Button className='mr-1' variant="outline-dark">Settings</Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/dashboard">Dashboard</Link></Button>
          </ButtonToolbar>
            ) : (
          <ButtonToolbar>
            <Button className='mr-1' variant="outline-dark"><Link to="/charities">More About Charities</Link></Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/login">Login</Link></Button>
            <Button className='mr-1' variant="outline-dark"><Link to="/register">Register</Link></Button>
          </ButtonToolbar>
        )}
        </Nav.Item>
      </Nav>
    )
  }
}



export default NavBar;