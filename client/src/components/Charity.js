import React, { Component } from 'react';
import NavBar from './NavBar.js'
import {Carousel, Container, Row, Col} from 'react-bootstrap';


const printChars = (charities) => {
  return charities.map( charity =>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={charity.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{charity.name}</h3>
            <p>{charity.desc}</p>
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
          <Col className="col-xl-8 col-md-9 col-12">
            <h1>hi</h1>
            <Carousel>
              {printChars(state.charities)}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Charity;