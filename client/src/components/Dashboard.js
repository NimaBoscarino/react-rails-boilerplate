import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import '../dashboard.css'

const charityList = (charities) => {
  return charities.map(charity =>
    <ul>
      <li>{charity.name}</li>
    </ul>
  )
}


class Dashboard extends Component {
  render() {
    const {
      mainState: state,
    } = this.props;

    return(
      <div>
        <Container>

            <p pull-right> Hello Current User State </p>

          <Row>
            <Col>
              <p>Your Current Round Ups</p>
              <div className="roundup-bg">
                <p>$50</p>
              </div>
              <div>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Transactions
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
            <Col>
              <p>Collective Achievements</p>
                {charityList(state.charities)}
            </Col>

          </Row>
          <hr />
          <Row className="mt-5">
            <Col>
              <p>Your Votes</p>
                <ReactMinimalPieChart
                  data={[
                    {
                      title: 'Sick Kids',
                      value: 1,
                      color: '#3D348B'
                    },
                    {
                      title: 'Habitat for Humanity',
                      value: 1,
                      color: '#F7B801'
                    },
                    {
                      title: 'Daily Food Bank',
                      value: 1,
                      color: '#9895F7'
                    },
                    {
                      title: 'Princess Margaret Foundation',
                      value: 1,
                      color: '#F18701'
                    },
                    {
                      title: 'Parkinson Canada',
                      value: 1,
                      color: '#F35B04'
                    }
                  ]}
                  lineWidth={15}
                  rounded
                  label
                    labelStyle={{
                      fontSize: '5px',
                    }}
                    labelPosition={60}
                />
              </Col>
              <Col>
              <p>Collective Votes</p>
                <ReactMinimalPieChart
                  data={[
                    {
                      title: 'One',
                      value: 10,
                      color: '#E38627'
                    },
                    {
                      title: 'Two',
                      value: 10,
                      color: '#C13C37'
                    },
                    {
                      title: 'Three',
                      value: 5,
                      color: '#6A2135'
                    }
                  ]}
                  lineWidth={15}
                  rounded
                />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Dashboard;