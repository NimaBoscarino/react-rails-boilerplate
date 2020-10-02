import React from 'react';

import "../css/favorites.css"
import { Table, Button, Container, Badge } from 'react-bootstrap';

import useFavoriteData from '../hooks/useFavoriteData'

export default function Favorites() {
  const { state, cancelFavorite } = useFavoriteData();
  const favorites = state.favorites;
  const favoredActivities = state.favoredActivities;

  
  const favoredItems = favoredActivities.map(favoredActivity => {
    const favoredActivityId = favoredActivity.id
    const favoriteId = favorites.filter(obj => obj.activity_id === favoredActivityId)[0].id

    function destroy(favoriteId) {
      cancelFavorite(favoriteId)
      .then( console.log("favorite cancelled"))
      .catch(err => console.log("favorite cancel err: ", err))
    }

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
          <Button variant="danger" onClick={() => destroy(favoriteId)}>
            Delete
          </Button>
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