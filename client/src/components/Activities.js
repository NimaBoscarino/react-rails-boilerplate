import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Activity from "./Activity"
import "../css/activities.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import Banner from './Banner'
import { Button, CardColumns, Container } from 'react-bootstrap'

function Activities(props) {

  const [state, setState] = useState({ message: "Find An Activity Nearby!" })
  const [activities, setActivities] = useState([])
  const [city, setCity] = useState("Choose Your City")
  const [priceRange, setPriceRange] = useState('Your Ideal Price Range')

  const fetchData = () => {
    axios.get('/api/activities')
      .then((response) => {
        console.log(response) // The entire response from the Rails API
        setActivities(response.data) //The first activity
        setState({});
      })
  }
  console.log(city);
  const inRange = (item) => {
    const rangeArray = priceRange.split(" - ").map(item => parseInt(item.substring(1)));
    if (item.price_per_person >= rangeArray[0] && item.price_per_person <= rangeArray[1]) {
      return true
    }
  }

  const activityList = activities.map(item => {
    if (item.city === city && inRange(item)) {
      return (
        <Activity
          key={item.id}
          item={item}
        />
      )
    }
  })

  return (

    <>
      <Banner>
        <div className="search-box">
          <h3>Enter your location and budget below to view our activities!</h3>
          <br />
          <div className='dropdown-button'>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {city}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => { setCity('Vancouver') }}>Vancouver</Dropdown.Item>
                <Dropdown.Item onClick={() => { setCity('North Vancouver') }}> North Vancouver</Dropdown.Item>
                <Dropdown.Item onClick={() => { setCity('Whistler') }}>Whistler</Dropdown.Item>
                <Dropdown.Item onClick={() => { setCity('Delta') }}>Delta</Dropdown.Item>
                <Dropdown.Item onClick={() => { setCity('Victoria') }}>Victoria</Dropdown.Item>
                <Dropdown.Item onClick={() => { setCity('Squamish') }}>Squamish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {priceRange}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => { setPriceRange("$0 - $40") }}>$0 - $40</Dropdown.Item>
                <Dropdown.Item onClick={() => { setPriceRange('$41 - $80') }}>$41 - $80</Dropdown.Item>
                <Dropdown.Item onClick={() => { setPriceRange('$81 - $120') }}>$81 - $120</Dropdown.Item>
                <Dropdown.Item onClick={() => { setPriceRange('$121 - $160') }}>$121 - $160</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button id="search-button" variant="primary" onClick={fetchData} >
              Search activities nearby
      </Button>
          </div>
        </div>

      </Banner>
      <div className="App">
        <h1>Let's go!</h1>
      </div>
      <Container>
        <CardColumns>
          {activityList}
        </CardColumns>
      </Container>

    </>
  )
}

export default Activities