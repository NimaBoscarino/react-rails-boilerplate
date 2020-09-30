import React from 'react';
// import { Link } from "react-router-dom";
import "../css/navbar.css"
import "../css/banner.css"

import { Jumbotron, Button } from 'react-bootstrap';

export default function Banner() {

  return (
    <>
      <Jumbotron>
        <h1>Hi Friends</h1>
        <p>
          Looking for something to do in your area? Enter your location and budget below and
          we will help you find something nearby. <br />Hurry and save your spot as they go quickly!
      </p>
        <br />
        <div className="mb-2">
          <Button variant="primary" size="lg">
            Large button
    </Button>{' '}

          <Button variant="secondary" size="lg">
            Large button
    </Button>

        </div>
      </Jumbotron>
      <br />

    </>
  )
}
