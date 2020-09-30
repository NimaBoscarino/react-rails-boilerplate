import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge, Row, Container, Col } from 'react-bootstrap';
import "../detail/activity.css"

function Activity(props) {
  const [activity, SetActivity] = useState({})

  useEffect(() => {
    const id = props.match.params.id;
    const url = `/api/activities/${id}`
    console.log(props)
    axios.get(url)
      .then(res => SetActivity(res.data))
      .catch(res => console.log(res))

  }, [])
  console.log(activity)
  return (
    <>
      <Container>

        <Row>
          <Col>
            <div className='info'>
              <h1>{activity.title}</h1>
              <div className='date'>Date: {activity.date}</div>
            </div>
            <div className='spots'>
              Spots remaining:  <Badge color='info'>{activity.max_number_of_participants}</Badge>
            </div>
            <div className='pricetag'>Price per person: ${activity.price_per_person}
            </div>
            <div className='CTA'>
              <Button variant="warning">Join this activity</Button>{' '}
              <Button variant="info">Add to favorites</Button>{' '}
            </div>
          </Col>

          <Col>
            <div className='image'><img src={activity.image_url} alt={activity.title}></img></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='description'>{activity.description}</div>
          </Col>

        </Row>

      </Container>

    </>
  )
}

export default Activity