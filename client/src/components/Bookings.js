import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Table } from 'react-bootstrap';

export default function Bookings() {
  // const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/bookings')
  //   .then(res => setBookings(res.data))
  //   .catch(err => console.log(err.message))
  // }, [bookings.length])

  return (
    <>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Activity</th>
          <th>Spots Available</th>
          <th>Date</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}