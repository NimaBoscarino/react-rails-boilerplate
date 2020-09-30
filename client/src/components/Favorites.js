import React, {useEffect, useState} from 'react';
import axios from 'axios';

import { Table, Button } from 'react-bootstrap';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('/api/users/')
    .then(res => {
      console.log(res.data[0].favorites)
      setFavorites(res.data[0].favorites)
    })
    .catch(err => console.log("favorites.js err: ", err))
  }, [favorites.length])
  
  const favoriteItems = favorites.map(favorite => {
    return (
      <tr  key={favorite.id}>
        <td>{favorite.user_id}</td>
        <td>{favorite.activity_id}</td>
        <td></td>
        <td></td>
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
            <th>Title/User_id</th>
            <th>Status/Activity_id</th>
            <th>Spots Available</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {favoriteItems}
          <td></td>
          <td></td>
        </tbody>
      </Table>
    </>
  )
}