import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import axios from 'axios';

export default function Dashboard(props) {
  return (
    <article className="request" key={props.request.id}>
      <header>
        <img 
          className="request_img"
          src={props.request.image}
          width="500" 
        />
        <h4>{props.request.name}</h4>
      </header>
      
      <li>
        <li>{props.request.description}</li>
        <ul>{props.request.expected_finish_date}</ul>
        <ul>{props.request.price}</ul>
      </li>
    </article>
  )
}