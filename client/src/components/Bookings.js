import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Table } from 'react-bootstrap';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
    .then(res => {
      setBookings(res.data)})
    .catch(err => console.log("bookings.js err: ", err))
  }, [bookings.length])
  
  const bookingItems = bookings.map(booking => {
    return (
      <tr  key={booking.id}>
        <td>{booking.user_id}</td>
        <td>{booking.activity_id}</td>
      </tr>
    )
  })
  return (
    <>
    <h2>Bookings: </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>User_id</th>
            <th>Activity_id</th>
          </tr>
        </thead>
        <tbody>
          {bookingItems}
        </tbody>
      </Table>
    </>
  )
}