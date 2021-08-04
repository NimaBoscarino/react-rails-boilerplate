import React, { useState } from "react";
import Button from "./Button.jsx"
import axios from 'axios';
import Requests from "./ArtistRequests.jsx";


export default function DashboardEditable(props) {
  const {id, image, name, description, index, price, expected_finish_date,  updateContent, updateRequest, finishRequest} = props 

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

      <footer>
        <Button onClick={updateRequest} name="Update"/>
        <Button onClick={finishRequest(index)} name="Finish"/>
      </footer>
    </article>
  )
}