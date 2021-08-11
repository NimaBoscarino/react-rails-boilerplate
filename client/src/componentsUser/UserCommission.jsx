import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import axios from 'axios';
import DatePicker from "react-datepicker";
import "./UserCommission.css"
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

// set up cookies, and request cookies 
const cookies = new Cookies();
const user_id = cookies.get('user_id')
const user_identity = cookies.get('identity')

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
    client_id: user_id,
    category_id: 1
  })

  function updateContent(value, key) {
    const requestCopy = {...request}
    requestCopy[key] = value;
    setRequest(requestCopy)
  }

  const submitRequest = function() {
    if (window.confirm('Are you sure you want to submit the request?')) {
      axios.post("/api/requests", request).then((response)=> {
        console.log("This is response" , response)
      }).catch((error) => {
        console.log('Error', error)
      })
    }
  }
  
  return (
    <div className="col-lg-6 col-md-4  commission_article">
      <form className="commision_user_form">
        <label htmlFor="user_commision_name">REQUEST TITLE: </label>
        <input className="form-control" name="user_commision_name" value={request.name} id="user_commision_name" onChange={(event) => updateContent(event.target.value, "name")}/>

      <br/>

        <label htmlFor="user_commision_expected_finish_date">EXPECTED FINISH DATE </label>
        <DatePicker className="form-control" id="user_commision_expected_finish_date" selected={startDate} onChange={(date) => 
          {setStartDate(date);
          updateContent(date.toDateString().slice(4), "expected_finish_date")}} />

      <br/>

        <label htmlFor="user_commision_price"> BUDGET ($): </label>
        <input className="form-control" name="price" value={request.price} id="user_commision_price" type="number" onChange={(event) => updateContent(event.target.value, "price")}/>
        
      <br/>

        <label htmlFor="user_commision_imageURL">SUPPORTING IMAGE: </label>
        <input className="form-control" name="image URL" value={request.image} id="user_commision_imageURL" onChange={(event) => updateContent(event.target.value, "image")}/>

        <br/>  

        <label htmlFor="user_commision_description">DESCRIPTION: </label>
        <textarea maxlength="100" className="form-control" name="description" value={request.description} id="user_commision_description" onChange={(event) => updateContent(event.target.value, "description")} />
        <br/>
        <label for="user_commision_category">CATEGORY:</label>
        <select className="form-control" id="user_commision_category" name="user_commision_category" onChange={(event) => updateContent(event.target.value, "ategory_id")}>
          <option value="1">Guitar</option>
          <option value="2">Art</option>
          <option value="3">HandyCraft</option>
        </select>
        <hr/>
      <footer className="commission_show_footer">
        <Button  onClick={submitRequest} name="SUBMIT"/>
      </footer>
      </form>

    </div>
  )

  // return (
    
  //       <div id="new-listing" className="col-lg-9 col-md-6 ">
  //       <div class="card ml-1 mr-1 col-lg-6 col-md-4" id="main-field">
    
    
  //         <form id="listing-form">
  //           <label><h4>CREATE NEW LISTING</h4></label>
  //           <div class="form-group">
  //             <label for="Title">Title</label>
  //             <input class="form-control" id="Title" name="title" aria-describedby="emailHelp" placeholder="Title" />
  //           </div>
  //           <div class="form-group">
  //             <label for="listingDescription">Description</label>
  //             <textarea class="form-control" id="Description" maxlength="100" name="description" placeholder="Description"></textarea>
  //           </div>
    
  //           <div class="form-group">
  //             <label for="price">Price</label>
  //             <input type="number" class="form-control" id="listingPrice" name="price" placeholder="Price" />
  //           </div>
  //           <div class="form-group">
  //             <label for="quantitiy">Quantity</label>
  //             <input type="number" class="form-control" id="listingQuantitiy" name="quantity" placeholder="Quantity" />
  //           </div>
  //           <div class="form-group">
  //             <label for="listingPicture">Item picture</label>
  //             <input type="url" class="form-control" id="listingPicture" name="cover_picture_url" placeholder="Item picture" />
  //           </div>
  //           <div class="form-group">
  //             <label for="exampleFormControlSelect1">Category</label>
  //             <select class="form-control" id="categorySelect" name="category_id">
  //               <option value='1'>Fiction</option>
  //               <option value='2'>Non-fiction</option>
  //               <option value='3'>Sci-fi</option>
  //               <option value='4'>Romance</option>
  //               <option value='5'>Economics</option>
  //               <option value='5'>History</option>
  //               <option value='5'>Self-Help</option>
  //               <option value='5'>Tech</option>
  //               <option value='5'>Religion</option>
  //             </select>
  //           </div>
    
  //         <button type="submit" class="btn btn-primary">Create Listing</button>
  //       </form>
  //     </div>
  //       </div>   
  //   )
}







