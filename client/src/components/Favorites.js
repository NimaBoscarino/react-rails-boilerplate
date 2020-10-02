import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/favorites.css"

import { Table, Button, Container } from 'react-bootstrap';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/favorites')),
      Promise.resolve(axios.get('/api/activities/user/1/favored'))
    ])
      .then(all => {
        console.log(all)
        setFavorites(all[0].data)
        setActivities(all[1].data)
      })
      .catch(err => console.log("favorites.js err: ", err))
  }, [])

  const favoredItems = activities.map(favoredActivity => {
    return (
      <tr key={favoredActivity.id}>
        <td>{favoredActivity.title}</td>
        <td>status</td>
        <td>{favoredActivity.max_number_of_participants}</td>
        <td>{favoredActivity.date}</td>
        <td>
          <Button variant="warning">Join now</Button>{' '}
        </td>
        <td>
          <Button variant="danger">Delete</Button>
        </td>
      </tr>

    )
  })
  return (
    <>
      <Container className="list-box">
        <h1>My Favorites </h1>
        <Table striped bordered hover >
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
      </Container>
    </>
  )
}