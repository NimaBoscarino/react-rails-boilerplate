import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import Requests from "./ArtistRequests.jsx";


export default function DashboardEditable(props) {
  const {id, image, name, description, index, price, expected_finish_date, actual_finish_date,  updateContent, button1Request, button2Request, button3Request, button1, button2, button3, hidden} = props 

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
      
      <form>
        <input name="description" value={description} onChange={(event) => updateContent(event.target.value, "description", index)} />
        <input name="expected_finish_date" value={expected_finish_date} onChange={(event) => updateContent(event.target.value, "expected_finish_date", index)}/>
        <input name="price" value={price} onChange={(event) => updateContent(event.target.value, "price", index)}/>
        <input name="image URL" value={image} onChange={(event) => updateContent(event.target.value, "image", index)}/>
      </form>

      <p>{actual_finish_date}</p>

      <footer>
        <Button onClick={() => button1Request(index)} name={button1}/>
        <Button onClick={() => button2Request(index)} name={button2}/>
        <Button onClick={() => button3Request(index)} name={button3} hidden={hidden}/>
      </footer>
    </article>
  )
}