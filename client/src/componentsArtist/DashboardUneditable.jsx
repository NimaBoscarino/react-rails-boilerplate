import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import Requests from "./ArtistRequests.jsx";

export default function Dashboard(props) {
  return (
    <article className="request" key={props.id}>
      <header>
        <img 
          className="request_img"
          src={props.image}
          width="500" 
        />
        <h4>{props.name}</h4>
      </header>
      
      <li>
        <li>{props.description}</li>
        <ul>{props.expected_finish_date}</ul>
        <ul>{props.price}</ul>
      </li>

      <footer>
        <Button onClick={props.acceptRequest} name="Accept"/>
      </footer>
    </article>
  )
}