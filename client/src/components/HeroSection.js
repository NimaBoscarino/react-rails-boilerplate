import React, { Component } from 'react';
import '../HeroSection.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HeroSection extends Component {
  render() {
    return(
      <Container fluid className="hero-section">
        <Row className="hero-background-color" id="home">
          <Col>
            <img src={'https://i.imgur.com/PQK9FOC.png'} className="hero-shape" />
          </Col>
          <Col className="hero-text">
            <div >
              <h1>Make a change, collectively</h1>
              <p>Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt </p>
            </div>
          </Col>
          <Col>
            <img src={'https://i.imgur.com/kwB8nDe.png'} />
          </Col>
        </Row>
        <Row className="blurb-text">
          <Col>
            <p>Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt </p>
          </Col>
          <Col>
            <p>Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt </p>
          </Col>
        </Row>
        <Row className="home-why" id="home-why">
          <Col>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col >
            <h2>Excepteur sint occaeuiecat cupidatat.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
        <Row className="home-collective" id="home-collective">
          <Col>
            <div>
              <img src={'https://i.imgur.com/Kih1TFy.png'} alt="" className="bean-img"/>
              <img src={'https://i.imgur.com/lQozyZl.png'} alt="" className="collective-img"/>
            </div>
          </Col>
          <Col>
            <div>
              <h2>Heading Here</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HeroSection;