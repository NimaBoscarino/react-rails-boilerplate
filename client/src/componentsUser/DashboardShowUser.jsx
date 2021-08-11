import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import Tag from "../componentsArtist/Tag.jsx"
import axios from 'axios';
import "./DashboardShowUser.css"

export default function Dashboard(props) {
  const {id, image, name, description, price, expected_finish_date,  actual_finish_date, index, acceptRequest, tag, hidden, client} = props 

  return (
    <article className="request_show_dashboard" key={id}>
      
      <header className="request_show_dashboard_header">
        <div className="request_show_Tag">
          <Tag tag={tag}></Tag>
          <h2 className="request_show_dashboard_h2">{name}</h2>
        </div>

        <img 
          className="request_show_dashboard_img"
          src={image}
        />
      </header>
      
      <div className="request_show_infor">
        <div className="request_show_details">
          <label>Description: </label>
          <span>{description}</span>
        </div>

        <div className="request_show_details">
          <label>Artist Name: </label>
          <span>{client.first_name} {client.last_name}</span>
        </div> 

        <div className="request_show_details">
          <label>Artist Contact: </label>
          <span>{client.phone_number}</span>
        </div>

        {actual_finish_date ? (
        <div className="request_show_details">
          <label>Finsihed on: </label>
          <span>{actual_finish_date}</span>
        </div>) : (
        <div className="request_show_details">
          <label>Expect to finish on: </label>
          <span>{expected_finish_date}</span>
        </div>
        )}

        <div className="request_show_details">
          <label>Price: </label>
          <span>{price}</span>
        </div>
      </div>

      <footer className="request_show_footer">
        <Button onClick={() => acceptRequest(index, id)} name="Accept" hidden={hidden}/>
      </footer>
    </article>
  )
}