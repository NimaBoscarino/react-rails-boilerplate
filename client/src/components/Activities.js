import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Activity from "./Activity"
import "../css/activities.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CardColumns, Container } from 'react-bootstrap'

function Activities(props) {

  const [state, setState] = useState({ message: "Find a activity nearby!" })
  const [activities, setActivities] = useState([])

  const fetchData = () => {
    axios.get('/api/activities')
      .then((response) => {
        console.log(response) // The entire response from the Rails API
        setActivities(response.data) //The first activity
        setState({
          message: `All ${response.data.length} activities are rendered at this point`
        });
      })
  }

  const activityList = activities.map(item => {
    return (
      <Activity
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <Fragment>
      <div className="App">
        <h1>This is the index(or home) page of our App</h1>
        <h1>{state.message}</h1>
        <Button variant="primary" onClick={fetchData} >
          Find Activities nearby
      </Button>
      </div>
      <Container>
        <CardColumns>
          {activityList}
        </CardColumns>
      </Container>

    </Fragment>
  )
}

export default Activities