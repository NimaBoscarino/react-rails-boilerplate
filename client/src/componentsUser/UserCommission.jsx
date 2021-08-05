import React, { useState } from "react";
import Button from "../componentsArtist/Button.jsx"
import axios from 'axios';


export default function DashboardEditArtist(props) {
  const commisionInstance = {
    image: '',
    description: '',
    expected_finish_date: '',
    price: 0,
  };
  
  const [commission, setCommission] = useState(commisionInstance)

  function updateContent(value, key) {
    const commissionCopy = commission
    console.log(commissionCopy)
    commissionCopy[key] = value;
    console.log(commissionCopy)
    setCommission(commissionCopy)
  }

  const submitcommission = function() {
    // axios.put("/artist_request", requestCopy)
  }

  return (
    <article className="commission">
      <form>
        <input name="description" value={commission.description} onChange={(event) => updateContent(event.target.value, "description")} />
        <input name="expected_finish_date" value={commission.expected_finish_date} onChange={(event) => updateContent(event.target.value, "expected_finish_date")}/>
        <input name="price" value={commission.price} onChange={(event) => updateContent(event.target.value, "price")}/>
        <input name="image URL" value={commission.image} onChange={(event) => updateContent(event.target.value, "image")}/>
      </form>

      <footer>
        <Button onClick={submitcommission} name="submit"/>
      </footer>
    </article>
  )
}