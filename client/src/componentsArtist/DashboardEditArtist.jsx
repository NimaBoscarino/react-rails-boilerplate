import React from "react";

import Button from "./Button.jsx"
import Tag from "./Tag.jsx"
import "./DashboardEditArtist.css"


export default function DashboardEditArtist(props) {
  const {id, image, name, description, index, price, expected_finish_date, actual_finish_date,  updateContent, button1Request, button2Request, button3Request, button1, button2, button3, hidden, client, tag} = props 

  return (
    <article className="request_edit_dashboard" key={id}>
      <header className="request_edit_dashboard_header">
        <div className="request_edit_Tag">
          <Tag tag={tag}></Tag>
          <h2 className="request_edit_dashboard_h2">{name}</h2>
        </div>

        <img 
          className="img-thumbnail rounded request_edit_dashboard_img"
          src={image}
        />
      </header>

      <form className="request_edit_form">
        <div className="request_show_details">
          <label>Client Name: </label>
          <span>{client.first_name} {client.last_name}</span>
        </div>

        <div className="request_show_details">
          <label>Client Contact: </label>
          <span>{client.phone_number}</span>
        </div>

        <div className="request_edit_input">
          <label for="input_description">Description: </label>
          <input type="text" name="description" value={description} id="input_description" onChange={(event) => updateContent(event.target.value, "description", index)} />
        </div>
        
        <div className="request_edit_input">
          <label for="input_expected_finish_date">Expect to finish on: </label>
          <input type="text" name="expected_finish_date" value={expected_finish_date} id="input_expected_finish_date" onChange={(event) => updateContent(event.target.value, "expected_finish_date", index)}/>
        </div>
        
        <div className="request_edit_input">
          <label for="input_price">Price: </label>
          <input className= "img-thumbnail" type="text" name="price" value={price} id="input_price" onChange={(event) => updateContent(event.target.value, "price", index)}/>
        </div>

        <div className="request_edit_input">
          <label for="input_imageURL">Upload your Image: </label>
          <input type="text" className= "img-thumbnail" name="image URL" value={image} id="input_imageURL" onChange={(event) => updateContent(event.target.value, "image", index)}/>
        </div>
        
      </form>

      <footer className="request_edit_footer">
        <Button onClick={() => button1Request(index, id)} name={button1}/>
        {button2? (<Button onClick={() => button2Request(index)} name={button2}/>):(<p></p>)}
        <Button onClick={() => button3Request(index, id)} name={button3} hidden={hidden}/>
      </footer>
    </article>
  )
}