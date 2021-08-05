import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import "./DashboardShowArtist.css"

export default function Dashboard(props) {
  const {id, image, name, description, price, expected_finish_date,  actual_finish_date, index, acceptRequest, acceptedTag, hidden} = props 

  return (
    <article className="request_uneditable_dashboard" key={id}>
      <header className="request_uneditable_dashboard_header">
        <h2 className="request_uneditable_dashboard_h2">{name}</h2>
        <img 
          className="request_uneditable_dashboard_img"
          src={image}
        />
      </header>
      
      <div className="request_editable_input">
        <span>Description: </span>{description}
      </div>

      <div className="request_editable_input">
        <span>Finsihed on: </span>{actual_finish_date}
      </div>

      <div className="request_editable_input">
        <span>Price: </span>{price}
      </div>


      <li>
        <li>{acceptedTag}</li> 
        <li>{description}</li>
        <ul>{expected_finish_date}</ul>
        <ul>{price}</ul>
      </li>

      <footer>
        <Button onClick={() => acceptRequest(index)} name="Accept" hidden={hidden}/>
      </footer>
    </article>
  )
}