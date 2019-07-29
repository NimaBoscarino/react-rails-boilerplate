import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  CardTitle,
  Card,
  CardText
} from "reactstrap";
import { FiArrowDownCircle } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

class MyNightPlanCards extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.findPeakHour=this.findPeakHour.bind(this);
    this.state = { collapse: false };
  }

  findPeakHour(busyArr){
    if (busyArr) {
    let maxBusy=0, hourId=0;
    busyArr.forEach(element=>{
      if (element.busy_value>maxBusy){
        maxBusy=element.busy_value;
        hourId=element.hour_id;
      }
    })
    if (hourId>=12 && hourId!==24) return `${hourId-12-1} PM`
    else
    return `${hourId-1} AM`;
  }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <div>
              <Card className='best-times-card w-100'>
                <CardBody>
                  <CardTitle className='best-times-title'>
                    <FiClock className='clock-icon' /> Recommended Times
                  </CardTitle>{" "}
                  <CardText>
                    <h5 class='times-title'>Busiest Times</h5>
                    Recommended arrival at {this.findPeakHour(this.props.place.popularTimes)}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className='col-8'>
            <div class='d-flex flex-column bd-highlight mb-3'>
              <div className='summary-row'>
                <Card className='my-card-summary-row p-2 bd-highlight'>
                  <div className='score-number-col'>
                    <p className='hotspot-score-title'>HotScore Score</p>
                    <p className='hotspot-score-number'>{this.props.place.currentBusyScore}</p>
                  </div>

                  <div className='details-col'>
                    <div className='my-card-summary-summary-div'>
                      <CardTitle className='my-card-summary-title'>
                        {this.props.place.name}
                      </CardTitle>
                      <CardTitle className='my-card-summary-address'>
                        {this.props.place.address}
                      </CardTitle>
                    </div>
                  </div>

                  <div className='my-card-summary-button-div'>
                    <Button
                      className='my-card-summary-button float-right'
                      variant='light'
                      onClick={this.toggle}>
                      <span className='button-icon'>
                        <FiArrowDownCircle />
                      </span>
                    </Button>
                  </div>
                </Card>
              </div>

              <Collapse isOpen={this.state.collapse}>
                <Card className='hidden-card w-100 p-2 bd-highlight'>
                  <CardBody>
                    <CardText>
                      <p>
                        Google Review Score: {this.props.place.rating} <br />
                        Google Review Number: {this.props.place.rating_n}
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNightPlanCards;
