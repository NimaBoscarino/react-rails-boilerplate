import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./UserCommission.css"
import "react-datepicker/dist/react-datepicker.css";


export default function DashboardEditArtist(props) {
  const commisionInstance = {};
  console.log(commission )
  
  const [commission, setCommission] = useState({
    name: '',
    image: '',
    description: '',
    price: 0,
    start_date: '',
    expected_finish_date: '',
    actual_finish_date: '',
    artist_id: ''
  })
  
  
  
  
  
  
  const [startDate, setStartDate] = useState(new Date());

  function updateContent(value, key) {
    const commissionCopy = {...commission}
    console.log(commissionCopy)
    commissionCopy[key] = value;
    console.log(commissionCopy)
    setCommission(commissionCopy)
  }

console.log("This is request" ,request)
  const submitRequest = function() {
    // alert("submit your request")
    axios.post("/api/requests", request).then((response)=> {
      console.log("This is response" , response)

      

    }).catch((error) => {
      console.log('Error', error)
    })
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
        
        <label htmlFor="user_commision_imageURL">Support Img: </label>
        <input name="image URL" value={request.image} id="user_commision_imageURL" onChange={(event) => updateContent(event.target.value, "image")}/>

        <label for="user_commision_description">Description: </label>
        <input name="description" value={commission.description} id="user_commision_description" onChange={(event) => updateContent(event.target.value, "description")} />
      </form>

      <footer className="commission_show_footer">
        <Button onClick={submitcommission} name="submit"/>
      </footer>
    </article>
  )
}