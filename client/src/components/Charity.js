import React, { Component } from 'react';

import NavBar from './NavBar.js'
import {Carousel, Container, Row, Col} from 'react-bootstrap';

const style =  {
  color: 'black'
}

const printChars = (tests) => {
  return tests.map( test =>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={test.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={style}>{test.name}</h3>
            <p style={style}>{test.desc}</p>
            <p style={style}>{test.objective}</p>

          </Carousel.Caption>
        </Carousel.Item>
      )

}

class Charity extends Component {
  render(){
    const {
      mainState: state,
    } = this.props
    return (
      <Container>
        <Row>
          <Col sm={6}>
            <Carousel>
              {printChars(state.tests)}
            </Carousel>
          </Col>
         {/* <Col>
            {printGoals(state.goals)}
          </Col>*/}
        </Row>
      </Container>
    )
  }
}

export default Charity;