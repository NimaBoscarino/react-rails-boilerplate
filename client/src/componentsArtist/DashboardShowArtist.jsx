import React, { useState } from "react";
import Button from "./Button.jsx"
import Tag from "./Tag.jsx"
import axios from 'axios';
import "./DashboardShowArtist.css"

export default function Dashboard(props) {
  const {id, image, name, description, price, expected_finish_date,  actual_finish_date, index, acceptRequest, tag, hidden} = props 

  return (
    <article className="request_show_dashboard" key={id}>
      
      <header className="request_show_dashboard_header">
        <div className="request_show_Tag">
          {/* <Tag tag="null"></Tag> */}
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
        <Button onClick={() => acceptRequest(index)} name="Accept" hidden={hidden}/>
      </footer>
    </article>
  )
}