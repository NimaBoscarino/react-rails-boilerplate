import React from 'react';
import { Link } from "react-router-dom";
import "../css/navbar.css"

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl } from 'react-bootstrap';

export default function Footer() {

  return (
    <>
      <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav className="justify-content-center" activeKey="/home">
          <Navbar.Text>
            ActivityGo
          </Navbar.Text>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Privacy Policy</Nav.Link>
          </Nav.Item>
          <Nav.Item>

          </Nav.Item>
        </Nav>
      </Navbar>

    </>
  )
}
