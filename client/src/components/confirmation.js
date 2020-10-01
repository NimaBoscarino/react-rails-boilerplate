import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Button, Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../css/confirmation.css'

function Confirmation(props){
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [individualPrice, setIndividualPrice] = useState(0)
  const [maxPeople, setMaxPeople] = useState(0)
  const [peopleSelected, setPeopleSelected] =useState(0)

  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/activities/${id}`
    axios.get(url)
      .then(res => 
        {setTitle(res.data.title)
        console.log(res)
        setIndividualPrice(res.data.price_per_person)
        setMaxPeople(res.data.max_number_of_participants)
        })
        
      .catch(res => console.log(res))

  }, [])
  const id = props.match.params.id
  const backLink = `/activities/${id}`
  console.log(maxPeople)
  return(
    <>
    <h1 className='confirm'>Awesome, let's have you booked for activity of</h1>
    <h1 className='title'>{title}</h1>
    <span className='question-spot'>How many spots do you want to book?</span>
    <input 
    className='input-spot'
    type ='number' 
    min='1'
    placeholder='enter your spots'
    size='10px'
    onChange={event => {
       setPrice(event.target.value * individualPrice)
       setPeopleSelected(event.target.value)
      }
    }
    />
    {peopleSelected>maxPeople && <Alert variant='danger'>The selected spots exceeds the maximum number of participants</Alert>}
    <h3 className='total-price'>Total price : ${price}</h3>
    <div className='button-group'>
      <Link to='/api/bookings'>
        <Button variant="success">Confirm your booking</Button>{' '}
      </Link>
      <Link to ={backLink}>
        <Button variant="info">Cancel</Button>{' '}
      </Link>
    </div>
    </>
  )

}


export default Confirmation