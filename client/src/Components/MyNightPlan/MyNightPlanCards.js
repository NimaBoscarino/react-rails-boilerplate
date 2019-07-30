import React, { Component } from "react";
import {
  Button,
  CardBody,
  CardTitle,
  Card,
  CardText
} from "reactstrap";
import { FiClock } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaGoogle,
  FaYelp,
  FaMapMarked,
  FaCreditCard
} from "react-icons/fa";

function average(a, b) {
  return (a + b) / 2;
}

class MyNightPlanCards extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.findPeakHour = this.findPeakHour.bind(this);
    this.state = { collapse: false };
  }

  findPeakHour(busyArr) {
    if (busyArr) {
      let maxBusy = 0,
        hourId = 0;
      busyArr.forEach(element => {
        if (element.busy_value > maxBusy) {
          maxBusy = element.busy_value;
          hourId = element.hour_id;
        }
      });
      if (hourId >= 12 && hourId !== 24) return `${hourId - 12 - 1} PM`;
      else return `${hourId - 1} AM`;
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
                    <FiClock className='clock-icon' /> Recommended Time
                  </CardTitle>{" "}
                  <CardText>
                    <p className='arrival-time'>
                      {this.findPeakHour(this.props.place.popularTimes)}
                    </p>
                  </CardText>
                  <CardText>
                    <p className='average-time'>
                      Average Time Spent:{" "}
                      {average(
                        this.props.place.time_spent_max,
                        this.props.place.time_spent_min
                      )}{" "}
                      minutes
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className='col-8'>
            <div class='d-flex flex-column bd-highlight mb-3'>
              <div className='summary-row'>
                <Card className='my-card-summary-row p-2 bd-highlight'>
                  <div className='row'>
                    <div className='title-col col'>
                      <CardTitle className='my-card-summary-title'>
                        {this.props.place.name}
                      </CardTitle>
                      <CardTitle className='my-card-hood-name'>
                        {this.props.place.neighbourhood_name}
                      </CardTitle>
                      <a href={this.props.place.yelp_url} target='_blank'>
                        {" "}
                        <Button outline color='light' size='sm' block>
                          <FaYelp className='yelp-icon' /> Read Yelp Reviews
                        </Button>
                      </a>
                    </div>

                    <div className='info-col col'>
                      <p className='card-price info-p'>
                        <FaCreditCard className='icon-carousel' />
                        {this.props.place.yelp_price}
                      </p>
                      <p className='card-price info-p'>
                        {this.props.place.yelp_categories.map((category)=>{return category + " "})}
                      </p>
                      <p className='card-address info-p'>
                        <FaMapMarkerAlt className='icon-carousel' />
                        {this.props.place.address}
                      </p>

                      <p className='card-phone info-p'>
                        <MdPhone className='icon-carousel' />
                        {this.props.place.yelp_display_phone}
                      </p>
                    </div>

                    <div className='hotspot-col col'>
                      <p className='hotspot-score-title'>HotScore Score</p>
                      <p className='hotspot-score-number'>
                        {this.props.place.currentBusyScore}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNightPlanCards;
