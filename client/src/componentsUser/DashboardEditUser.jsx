import React from "react";


import Button from "../componentsArtist/Button"
import Payment from "./Payment.jsx"
import Tag from "../componentsArtist/Tag.jsx"
import "./DashboardShowUser.css"


export default function DashboardEditUser(props) {
  const {id, image, name, description, index, price, expected_finish_date, actual_finish_date,  updateContent, button1Request, button2Request, button1, button2, payRequest, tag, client} = props 

  return (
    <article className="request_edit_dashboard" key={id}>
      <header className="request_edit_dashboard_header">
        <div className="request_edit_Tag">
          <Tag tag={tag}></Tag>
          <h2 className="request_edit_dashboard_h2">{name}</h2>
        </div>

        <img 
          className="request_edit_dashboard_img"
          src={image} alt={name}
        />
      </header>

      <form className="request_edit_form">
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
          <input type="text" name="price" value={price} id="input_price" onChange={(event) => updateContent(event.target.value, "price", index)}/>
        </div>

        <div className="request_edit_input">
          <label for="input_imageURL">Upload your Image: </label>
          <input type="text" name="image URL" value={image} id="input_imageURL" onChange={(event) => updateContent(event.target.value, "image", index)}/>
        </div>

        {client ? (
        <>
        <div className="request_show_details">
          <label>Artist Name: </label>
          <span>{client.first_name} {client.last_name}</span>
        </div> 

        <div className="request_show_details">
          <label>Artist Contact: </label>
          <span>{client.phone_number}</span>
        </div>
        </>
        ) : (<p></p>)}  
      </form>

      <p>{actual_finish_date}</p>

      <footer className="request_edit_footer">
        <Button onClick={() => button1Request(index, id)} name={button1}/>
        <Button onClick={() => button2Request(index, id)} name={button2}/>
        {client ? (
        <Payment 
            index={index}
            payRequest = {payRequest}
        />) : (<p></p>)}
      </footer>
    </article>
  )
}