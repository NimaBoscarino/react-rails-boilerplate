import React, { Component } from 'react';
import {Form, FormCheck, Container, Row, Col} from 'react-bootstrap';


class Charity extends Component {
  render(){
    const {
      mainState: state,
      onVoteChanged,
    } = this.props

    return (
      <Container>
      <Form>
        <Row>
            {['radio'].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <label> Vote 1 </label> <br />
                   <Form.Check inline label="Daily Food Bank" type={type}
                    id={`inline-${type}-5`} checked={state.vote1 === "daily food bank"} value="0" name="vote1" onChange={onVoteChanged}/>
                   <Form.Check inline label="Habitat" type={type} id={`inline-${type}-5`} checked={state.vote1 === "habitat"} value="1" name="vote1" onChange={onVoteChanged}/>
                   <Form.Check inline label="Parkinson" type={type} id={`inline-${type}-5`} checked={state.vote1 === "parkinson"} value="2" name="vote1" onChange={onVoteChanged}/>
                   <Form.Check inline label="Princess" type={type} id={`inline-${type}-5`} checked={state.vote1 === "princess"} value="3" name="vote1" onChange={onVoteChanged}/>
                  <Form.Check inline label="Sick kids" type={type} id={`inline-${type}-5`} checked={state.vote1 === "Sick kids"} value="4" name="vote1" onChange={onVoteChanged}/>
              </div>
            ))}
        </Row>
        <Row>
            {['radio'].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <label> Vote 2 </label> <br />
                   <Form.Check inline label="Daily Food Bank" type={type}
                    id={`inline-${type}-5`} checked={state.vote2 === "daily food bank"} value="0" name="vote2" onChange={onVoteChanged}/>
                   <Form.Check inline label="Habitat" type={type} id={`inline-${type}-5`} checked={state.vote2 === "habitat"} value="1" name="vote2" onChange={onVoteChanged}/>
                   <Form.Check inline label="Parkinson" type={type} id={`inline-${type}-5`} checked={state.vote2 === "parkinson"} value="2" name="vote2" onChange={onVoteChanged}/>
                   <Form.Check inline label="Princess" type={type} id={`inline-${type}-5`} checked={state.vote2 === "princess"} value="3" name="vote2" onChange={onVoteChanged}/>
                  <Form.Check inline label="Sick kids" type={type} id={`inline-${type}-5`} checked={state.vote2 === "Sick kids"} value="4" name="vote2" onChange={onVoteChanged}/>
              </div>
            ))}
        </Row>
        <Row>
            {['radio'].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <label> Vote 3 </label> <br />
                   <Form.Check inline label="Daily Food Bank" type={type}
                    id={`inline-${type}-5`} checked={state.vote3 === "daily food bank"} value="0" name="vote3" onChange={onVoteChanged}/>
                   <Form.Check inline label="Habitat" type={type} id={`inline-${type}-5`} checked={state.vote3 === "habitat"} value="1" name="vote3" onChange={onVoteChanged}/>
                   <Form.Check inline label="Parkinson" type={type} id={`inline-${type}-5`} checked={state.vote3 === "parkinson"} value="2" name="vote3" onChange={onVoteChanged}/>
                   <Form.Check inline label="Princess" type={type} id={`inline-${type}-5`} checked={state.vote3 === "princess"} value="3" name="vote3" onChange={onVoteChanged}/>
                  <Form.Check inline label="Sick kids" type={type} id={`inline-${type}-5`} checked={state.vote3 === "Sick kids"} value="4" name="vote3" onChange={onVoteChanged}/>
              </div>
            ))}
        </Row>
        <Row>
            {['radio'].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <label> Vote 4 </label> <br />
                   <Form.Check inline label="Daily Food Bank" type={type}
                    id={`inline-${type}-5`} checked={state.vote4 === "daily food bank"} value="0" name="vote4" onChange={onVoteChanged}/>
                   <Form.Check inline label="Habitat" type={type} id={`inline-${type}-5`} checked={state.vote4 === "habitat"} value="1" name="vote4" onChange={onVoteChanged}/>
                   <Form.Check inline label="Parkinson" type={type} id={`inline-${type}-5`} checked={state.vote4 === "parkinson"} value="2" name="vote4" onChange={onVoteChanged}/>
                   <Form.Check inline label="Princess" type={type} id={`inline-${type}-5`} checked={state.vote4 === "princess"} value="3" name="vote4" onChange={onVoteChanged}/>
                  <Form.Check inline label="Sick kids" type={type} id={`inline-${type}-5`} checked={state.vote4 === "Sick kids"} value="4" name="vote4" onChange={onVoteChanged}/>
              </div>
            ))}
        </Row>
        <Row>
            {['radio'].map(type => (
              <div key={`default-${type}`} className="mb-3">
                <label> Vote 5 </label> <br />
                   <Form.Check inline label="Daily Food Bank" type={type}
                    id={`inline-${type}-5`} checked={state.vote5 === "daily food bank"} value="0" name="vote5" onChange={onVoteChanged}/>
                   <Form.Check inline label="Habitat" type={type} id={`inline-${type}-5`} checked={state.vote5 === "habitat"} value="1" name="vote5" onChange={onVoteChanged}/>
                   <Form.Check inline label="Parkinson" type={type} id={`inline-${type}-5`} checked={state.vote5 === "parkinson"} value="2" name="vote5" onChange={onVoteChanged}/>
                   <Form.Check inline label="Princess" type={type} id={`inline-${type}-5`} checked={state.vote5 === "princess"} value="3" name="vote5" onChange={onVoteChanged}/>
                  <Form.Check inline label="Sick kids" type={type} id={`inline-${type}-5`} checked={state.vote5 === "Sick kids"} value="4" name="vote5" onChange={onVoteChanged}/>
              </div>
            ))}
        </Row>

      </Form>
      </Container>
    )
  }
}

export default Charity;