import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Table, Button } from 'react-bootstrap';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/favorites')),
      Promise.resolve(axios.get('/api/activities/user/1'))
    ])
    .then(all => {
      console.log(all)
      setFavorites(all[0].data)
      setActivities(all[1].data)
    })
    .catch(err => console.log("favorites.js err: ", err))
  }, [])
  
  const favoredItems = activities.map(activity => {
    return (
      <tr  key={activity.id}>
        <td>{activity.title}</td>
        <td>status</td>
        <td>{activity.max_number_of_participants}</td>
        <td>{activity.date}</td>
        <td>
          <Button variant="success">Join</Button>
        </td>
        <td>
          <Button variant="danger">Delete</Button> 
        </td>
      </tr>
    )
  })
  return (
    <>
    <h2>Favorites: </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Activity Title</th>
            <th>Status</th>
            <th>Spots Available</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {favoredItems}
        </tbody>
      </Table>
    </>
  )
}