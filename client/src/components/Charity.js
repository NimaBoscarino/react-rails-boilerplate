import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const printChars = (charities) => {
  return charities.map(charity =>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://placekitten.com/300/300"
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
      <div>
      <h1>hi</h1>
      <Carousel>
        {printChars(state.charities)}
      </Carousel>
      </div>
    )
  }
}

export default Charity;