import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';



const TopNavBar = ({setCurrentPage, user, handleLogout }) => {



  return (
    <Navbar bg="light" variant="light" className="navbar-underline">
      <Navbar.Brand>Readr</Navbar.Brand>
      <Nav className="mr-auto">
        {user ? (
          <>
            <Nav.Item>
              <Nav.Link  onClick={() => setCurrentPage('dashboard')}>Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  onClick={() => setCurrentPage('profile')}>Profile</Nav.Link>
            </Nav.Item>
           <Nav.Item>
            <Nav.Link  onClick={() => setCurrentPage('search')}>Search <FaSearch/></Nav.Link>
           </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={ handleLogout}>Logout</Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link onClick={() => setCurrentPage('homepage')}>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setCurrentPage('homepage')}>Register</Nav.Link>
            </Nav.Item>
          </>
        )}
      </Nav>
    </Navbar>
  );


}

export default TopNavBar;
