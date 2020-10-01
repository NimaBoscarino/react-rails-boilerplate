import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Button, Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'

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
    <h1>Awesome, let's have you booked in for</h1>
    <h2>{title}</h2>
    <h3>How many spots you want to book?</h3>
    <input type ='number' 
    min='1'
    placeholder='enter your spots'
    onChange={event => {
       setPrice(event.target.value * individualPrice)
       setPeopleSelected(event.target.value)
      }
    }
    />
    {peopleSelected>maxPeople && <Alert variant='danger'>The selected spots exceeds the maximum number of participants</Alert>}
    <h3>The total price is $ {price}</h3>

    <Button variant="success">Confirm your booking</Button>{' '}
    <Link to ={backLink}>
      <Button variant="info">Cancel</Button>{' '}
    </Link>
    </>
  )

}


export default Confirmation