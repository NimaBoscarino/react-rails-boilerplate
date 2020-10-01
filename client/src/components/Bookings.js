import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Banner from "./Banner"

import { Table, Button } from 'react-bootstrap';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [bookedActivities, setBookedActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/bookings')),
      Promise.resolve(axios.get('/api/activities/user/1/booked'))
    ])
    .then(all => {
      console.log(all)
      setBookings(all[0].data)
      setBookedActivities(all[1].data)
    })
    .catch(err => console.log("bookings.js err: ", err))
  }, [bookings.length])
  
  function CancelButton(props) {
    return (
      <Button variant="danger" 
        onClick={props.onClick}
      >
        Cancel
      </Button>)
  }
  
  const bookedItems = bookedActivities.map(bookedActivity => {
    // function findBookingId(bookings) {
    //   booking
      
    // }

    function cancelBooking(bookedActivityId) {
      // axios.delete(`/api/users/1/bookings/${bookedActivityId}`)
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log('err from cancel booking', err)
      //   })
    }

    return (
      <tr key={bookedActivity.id}>
        <td>{bookedActivity.title}</td>
        <td></td>
        <td>{bookedActivity.date}</td>
        <td>
          <CancelButton onClick={cancelBooking} />
        </td>
      </tr>
    )
  })
  return (
    <>
    <h2>Booked Activities</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Activity Title</th>
            <th>Status</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookedItems}
        </tbody>
      </Table>
    </>
  )
}