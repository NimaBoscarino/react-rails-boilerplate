import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./UserCommission.css"
import "react-datepicker/dist/react-datepicker.css";


export default function DashboardEditArtist(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState({
    name: '',
    image: '',
    description: '',
    price: 50,
    start_date: "",
    expected_finish_date: "",
    actual_finish_date: "",
    client_id: 25,
    category_id: 1
  })

  function updateContent(value, key) {
    const requestCopy = {...request}
    requestCopy[key] = value;
    console.log("This is request1" ,requestCopy)
    setRequest(requestCopy)
  }

  console.log("This is request2" ,request)
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
        <label htmlFor="user_commision_name">Name of request: </label>
        <input name="user_commision_name" value={request.name} id="user_commision_name" onChange={(event) => updateContent(event.target.value, "name")}/>

        <label htmlFor="user_commision_expected_finish_date">Expect to finish by: </label>
        <DatePicker id="user_commision_expected_finish_date" selected={startDate} onChange={(date) => 
          {setStartDate(date);
          updateContent(date.toDateString().slice(4), "expected_finish_date")}} />

        <label htmlFor="user_commision_price">Budget ($): </label>
        <input name="price" value={request.price} id="user_commision_price" type="number" onChange={(event) => updateContent(event.target.value, "price")}/>
        
        <label htmlFor="user_commision_imageURL">Support Img: </label>
        <input name="image URL" value={request.image} id="user_commision_imageURL" onChange={(event) => updateContent(event.target.value, "image")}/>

        <label htmlFor="user_commision_description">Description: </label>
        <input name="description" value={request.description} id="user_commision_description" onChange={(event) => updateContent(event.target.value, "description")} />

        <label for="user_commision_category">Category:</label>
        <select id="user_commision_category" name="user_commision_category" onChange={(event) => updateContent(event.target.value, "ategory_id")}>
          <option value="1">Guitar</option>
          <option value="2">Art</option>
          <option value="3">HandyCraft</option>
        </select>
      </form>

      <footer className="commission_show_footer">
        <Button onClick={submitRequest} name="submit"/>
      </footer>
    </article>
  )
}







