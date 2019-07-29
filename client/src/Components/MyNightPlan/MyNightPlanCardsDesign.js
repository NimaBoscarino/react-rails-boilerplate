import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  CardTitle,
  Card,
  CardText
} from "reactstrap";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

class MyNightPlanCardsDesign extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      isCardView: false
    };
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
                    Between 8PM and 9:30PM
                  </CardText>
                  <CardText>
                    <h5 class='times-title'>Slowest Times</h5>
                    Between 6PM and 7:30PM
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
                    <p className='hotspot-score-number'>45</p>
                  </div>

                  <div className='details-col'>
                    <div className='my-card-summary-summary-div'>
                      <CardTitle className='my-card-summary-title'>
                        Gastown Pub
                      </CardTitle>
                      <CardTitle className='my-card-summary-address'>
                        1245 West Main St.
                      </CardTitle>
                    </div>
                  </div>

                  <div className='my-card-summary-button-div'>
                    <Button
                      className='my-card-summary-button float-right'
                      variant='light'
                      onClick={() => {
                        this.toggle();
                        this.setState({
                          isCardView: !this.state.isCardView
                        });
                      }}>
                      {this.state.isCardView ? (
                        <FiChevronUp className='arrow-icon' />
                      ) : (
                        <FiChevronDown className='arrow-icon' />
                      )}
                    </Button>
                  </div>
                </Card>
              </div>

              <Collapse isOpen={this.state.collapse}>
                <Card className='hidden-card w-100 p-2 bd-highlight'>
                  <CardBody>
                    <CardText>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
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

export default MyNightPlanCardsDesign;
