import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Navbar bg="light" variant="light" className="mt-auto">
      <Container>
        <Row className="w-100">
          <Col md={4} className="d-flex align-items-center">
            <Navbar.Brand>Readr</Navbar.Brand>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-center">
            <Nav>
              <Nav.Link href="https://facebook.com" target="_blank">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank">
                <FaTwitter />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank">
                <FaInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
