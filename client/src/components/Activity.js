import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import "../css/activity.css"
import { Card, CardDeck, Button } from 'react-bootstrap';

function Activity(props) {
  return (
    <>
      <Card style={{ flex: 1 }}>
        <Card.Img variant="top" src={props.item.image_url} alt={props.item.title} />
        <Card.Body>
          <Card.Title >{props.item.title}</Card.Title>
          <Card.Text>
            {props.item.description.substring(0, 100,)}..
          </Card.Text>

          <Card.Text>
            Spots remaining: {props.item.max_number_of_participants}
          </Card.Text>
          <Link to={`/activities/${props.item.id}`}>
            <Button variant="primary">View more details</Button>
          </Link>
        </Card.Body>
      </Card>


      {/* <div className='activity'>
        <div className='activity-img'>
          <img src={props.item.image_url} alt={props.item.title} />
        </div>
        <div className='activity-title'>
          {props.item.title}
        </div>
        <div className='activity-link'>
          <Link to={`/activities/${props.item.id}`}>More details</Link>
        </div>
        <div className='activity-spot'>
          spots remaining:{props.item.max_number_of_participants}
        </div>
      </div> */}
    </>
  )
}

export default Activity