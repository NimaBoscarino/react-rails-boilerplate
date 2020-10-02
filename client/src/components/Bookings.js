import React from 'react';

import "../css/favorites.css"

import Banner from "./Banner"
import useBookingData from '../hooks/useBookingData'

import { Table, Button, Container } from 'react-bootstrap';

export default function Bookings() {
  const { state, cancelBooking } = useBookingData();
  const bookings = state.bookings;
  const bookedActivities = state.bookedActivities;
  
  
  const bookedItems = bookedActivities.map(bookedActivity => {
    const bookedActivityId = bookedActivity.id
    const bookingId = bookings.filter(obj => obj.activity_id === bookedActivityId)[0].id

    function destroy(bookingId) {
      cancelBooking(bookingId)
      .then( console.log("booking cancelled"))
      .catch(err => console.log("booking cancel err: ", err))
    }

    return (
      <tr key={bookedActivity.id}>
        <td>{bookedActivity.title}</td>
        <td></td>
        <td>{bookedActivity.date}</td>
        <td>
          <Button variant="danger" 
            onClick={() => destroy(bookingId)}
          >
            Cancel
          </Button>
        </td>
      </tr>
    )
  })
  return (
    <>
      <Container className="list-box">
        <h1>Booked Activities</h1>
        <Table striped bordered hover>
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
      </Container>
    </>
  )
}