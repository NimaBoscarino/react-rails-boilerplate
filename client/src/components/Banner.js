import React from 'react';
// import { Link } from "react-router-dom";
import "../css/navbar.css"
import "../css/banner.css"

import { Jumbotron, Button } from 'react-bootstrap';

export default function Banner(props) {

  return (
    <>
      <Jumbotron>
        <h1>Hi Folks,</h1>
        <h4>
          Looking for something to do in your area? Enter your location and budget below and
          we will help you find something nearby. <br />Hurry and save your spot as they go quickly!
      </h4>
        <br />
        <Button variant="primary">Login / Register</Button>{' '}
        <br /><br />
        <h4>Enter your location and budget below and we will find an activity for you !</h4>
        {props.children}

      </Jumbotron>
      <br />

    </>
  )
}
