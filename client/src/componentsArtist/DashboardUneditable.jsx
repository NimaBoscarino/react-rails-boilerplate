import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import Requests from "./ArtistRequests.jsx";

export default function Dashboard(props) {
  const {id, image, name, description, price, expected_finish_date,  index, acceptRequest, acceptedTag} = props 

  return (
    <article className="request" key={id}>
      <header>
        <img 
          className="request_img"
          src={image}
          width="500" 
        />
        <h4>{name}</h4>
      </header>
      
      <li>
        <li>{acceptedTag}</li> 
        <li>{description}</li>
        <ul>{expected_finish_date}</ul>
        <ul>{price}</ul>
      </li>

      <footer>
        <Button onClick={() => acceptRequest(index)} name="Accept"/>
      </footer>
    </article>
  )
}