import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Activity from "./Activity"
import "../css/activities.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

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
        <h1>{state.message}</h1>
        <Button outline color='primary' onClick={fetchData} >
          Find Activities nearby
      </Button>
      </div>

      <ul className='grid'>{activityList}</ul>

    </Fragment>
  )
}

export default Activities