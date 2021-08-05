import React, { useState } from "react";
import axios from 'axios';

import Button from "./Button.jsx"
import "./DashboardEditable.css"


export default function DashboardEditable(props) {
  const {id, image, name, description, index, price, expected_finish_date, actual_finish_date,  updateContent, button1Request, button2Request, button3Request, button1, button2, button3, hidden} = props 

  return (
    <article className="request_editable_dashboard" key={id}>
      <header className="request_editable_dashboard_header">
        <h2 className="request_editable_dashboard_h2">{name}</h2>
        <img 
          className="request_editable_dashboard_img"
          src={image}
        />
      </header>
      
      <form className="request_editable_form">
        <div className="request_editable_input">
          <label for="input_description">Description: </label>
          <input type="text" name="description" value={description} id="input_description" onChange={(event) => updateContent(event.target.value, "description", index)} />
        </div>
        
        <div className="request_editable_input">
          <label for="input_expected_finish_date">Expect to finish on: </label>
          <input type="text" name="expected_finish_date" value={expected_finish_date} id="input_expected_finish_date" onChange={(event) => updateContent(event.target.value, "expected_finish_date", index)}/>
        </div>
        
        <div className="request_editable_input">
          <label for="input_price">Price: </label>
          <input type="text" name="price" value={price} id="input_price" onChange={(event) => updateContent(event.target.value, "price", index)}/>
        </div>

        <div className="request_editable_input">
          <label for="input_imageURL">Upload your Image: </label>
          <input type="text" name="image URL" value={image} id="input_imageURL" onChange={(event) => updateContent(event.target.value, "image", index)}/>
        </div>
        
      </form>

      <p>{actual_finish_date}</p>

      <footer className="request_editable_footer">
        <Button onClick={() => button1Request(index)} name={button1}/>
        <Button onClick={() => button2Request(index)} name={button2}/>
        <Button onClick={() => button3Request(index)} name={button3} hidden={hidden}/>
      </footer>
    </article>
  )
}