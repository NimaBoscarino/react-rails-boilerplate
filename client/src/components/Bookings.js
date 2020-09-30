import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Table, Button } from 'react-bootstrap';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/bookings')),
      Promise.resolve(axios.get('/api/activities/user/1'))
    ])
    .then(all => {
      console.log(all)
      setBookings(all[0].data)
      setActivities(all[1].data)
    })
    .catch(err => console.log("bookings.js err: ", err))
  }, [])
  
  const activityItems = activities.map(activity => {
    return (
      <tr key={activity.id}>
        <td>{activity.title}</td>
        <td></td>
        <td>{activity.date}</td>
        <td>
          <Button variant="danger">Cancel</Button> 
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
          {activityItems}
        </tbody>
      </Table>
    </>
  )
}