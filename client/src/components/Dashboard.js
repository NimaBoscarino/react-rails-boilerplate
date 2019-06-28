import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import '../dashboard.css'
import Login from './Login.js';
import NavBar from './NavBar';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Switch } from 'react-router-dom';


// const isAuth = () => {
//   axios.get('/api/session')
//   .then((response) => {
//     console.log(response.data.isLoggedIn)
//       return response.data.isLoggedIn
//   })
// };

const charityList = (charities) => {
  return charities.map(charity =>
    <ul>
      <li>{charity.name}</li>
    </ul>
  )
}


class Dashboard extends Component {
  componentDidMount() {
    this.props.getDashboardInfo()
  }
  render() {
    const {
      user_votes,
      mainState: state,
    } = this.props

    const v1 = 0
    const v2 = 1
    const v3 = 2
    const v4 = 3
    const v5 = 4

    // const v1 = user_votes[0]
    // const v2 = user_votes[1]
    // const v3 = user_votes[2]
    // const v4 = user_votes[3]
    // const v5 = user_votes[4]

    return(

      <div>
      {/*<Switch>*/}
        <Container>

            <p pull-right> Hello, {this.props.mainState.first_name} </p>

          <Row>
            <Col>
              <p>Your Current Round Ups</p>
              <div className="roundup-bg">
                <p>${this.props.mainState.current_roundup_balance}</p>
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
                      value: v1,
                      color: '#3D348B'
                    },
                    {
                      title: 'Habitat for Humanity',
                      value: v2,
                      color: '#F7B801'
                    },
                    {
                      title: 'Daily Food Bank',
                      value: v3,
                      color: '#9895F7'
                    },
                    {
                      title: 'Princess Margaret Foundation',
                      value: v4,
                      color: '#F18701'
                    },
                    {
                      title: 'Parkinson Canada',
                      value: v5,
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
{/*      </Switch>
      )
      : (
      <Switch>
      <Redirect to='/login'/>
        //<Login exact path ="/login" />
      </Switch>
      )}*/}
    </div>
    )
  }
}

export default Dashboard;