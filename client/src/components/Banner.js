import React from 'react';
// import { Link } from "react-router-dom";
import "../css/navbar.css"
import "../css/banner.css"

import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

export default function Banner(props) {

  return (
    <>
      <Jumbotron>
        <h1>Hi Folks,</h1>
        <h5>Looking for something to do in your area?</h5>
        <h4>Enter your location and budget below and
          let us help you find something to do nearby. <br />Hurry and save your spot as they go quickly!
      </h4>

        <br />
        <Container fluid="md">
          <Row>
            <Col className="drop-field">{props.children}</Col>
          </Row>
        </Container>

      </Jumbotron>
      <br />

    </>
  )
}
