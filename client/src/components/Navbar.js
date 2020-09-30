import React from 'react';
// import { Link } from "react-router-dom";
import "../css/navbar.css"

import { Navbar, Nav, Button } from 'react-bootstrap';

export default function NavigBar() {

  return (
    <>

      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand>ActivityGo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#favorite">My favorites</Nav.Link>
          <Nav.Link href="/api/bookings">My bookings</Nav.Link>

        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">John Doe</a>
          </Navbar.Text>
          <Button variant="outline-info">Sign Out</Button>
        </Navbar.Collapse>
      </Navbar>
      <br />

    </>
  )
}

