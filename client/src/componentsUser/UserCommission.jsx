import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import axios from 'axios';
import DatePicker from "react-datepicker";
import UserCommission from "./UserCommission.css"
import "react-datepicker/dist/react-datepicker.css";


export default function DashboardEditArtist(props) {
  const commisionInstance = {
    name: '',
    image: '',
    description: '',
    expected_finish_date: '',
    price: 0,
  };
  
  const [commission, setCommission] = useState(commisionInstance)
  const [startDate, setStartDate] = useState(new Date());

  function updateContent(value, key) {
    const commissionCopy = {...commission}
    console.log(commissionCopy)
    commissionCopy[key] = value;
    console.log(commissionCopy)
    setCommission(commissionCopy)
  }

  const submitcommission = function() {
    alert("submit your request")
    // axios.put("/artist_request", requestCopy)
  }

  return (
    <article className="commission_article">
      <form className="commision_user_form">
        <label for="user_commision_name">Name of request: </label>
        <input name="user_commision_name" value={commission.name} id="user_commision_name" onChange={(event) => updateContent(event.target.value, "name")}/>

        <label for="user_commision_expected_finish_date">Expect to finish by: </label>
        <DatePicker id="user_commision_expected_finish_date" selected={startDate} onChange={(date) => 
          {setStartDate(date);
          updateContent(date.toDateString().slice(4), "expected_finish_date")}} />

        <label for="user_commision_price">Budget ($): </label>
        <input name="price" value={commission.price} id="user_commision_price" type="number" onChange={(event) => updateContent(event.target.value, "price")}/>
        
        <label for="user_commision_imageURL">Support Img: </label>
        <input name="image URL" value={commission.image} id="user_commision_imageURL" onChange={(event) => updateContent(event.target.value, "image")}/>

        <label for="user_commision_description">Description: </label>
        <input name="description" value={commission.description} id="user_commision_description" onChange={(event) => updateContent(event.target.value, "description")} />
      </form>

      <footer className="commission_show_footer">
        <Button onClick={submitcommission} name="submit"/>
      </footer>
    </article>
  )
}