import React, { Component } from "react";
import MyNightPlanCards from "./MyNightPlanCards";
import { FaChartLine, FaInfoCircle } from "react-icons/fa";
import icon from "../../global-assets/hotspot-score-icon-small.png";


import Charts from "../Charts/Charts";

class MyNightPlan extends Component {
  render() {
    return (
      <div id='MyNightPlan'>
        <div className='container-fluid my-night-container w-100 p-0 m-0'>
          <div className='my-night-container'>
            <div className='row my-night-title-row'>
              <div className='col'>
                <h1 className='my-night-title'>My Plan</h1>
                <p className='my-night-intro'>
                  {" "}
                  <FaInfoCircle className='info-circle-icon' />
                  Suggested time is provided as an estimate of when to arrive to
                  avoid excessive wait times.
                </p>
              </div>
            </div>

            <div className='d-inline-flex p-2 night-out-div w-100'>
              <div className='col d-flex flex-column night-out-card-div'>
                {this.props.nightList.map(place => {
                  return <MyNightPlanCards key={place.id} place={place} />;
                })}

                <div className='p-2 stat-div'>
                  <div className='card stats-card'>
                    <div className='card-header stats-title'>
                      <h5 className='stats-title-text'>
                        <span className='stats-icon'>
                          <FaChartLine className='stats-icon-small' />
                        </span>{" "}
                        Your Plan Stats
                      </h5>
                    </div>
                    <div className='card-body'>
                      <div className='card-body card-text'>
                        <div className='row'>
                          <div className='col-4 chart-col'>
                            <div className='col hotspot-score-col'>
                              <div className='row w-100'>
                              <div className='title-div'>
                              <img className='hotspot-icon-stats' src={icon} alt={""} />
                                <h5 className='hotspot-score-title '>
                                  Your Plan's HotSpot Score
                                </h5>
                                </div>

                                <p className='hotspot-score-number'>
                                  {Math.ceil(
                                    this.props.nightList.reduce(
                                      (acc, cur) => acc + cur.current_hot_score,
                                      0
                                    ) / this.props.nightList.length
                                  )}
                                  <span className='percent-sign-large'>%</span>
                                </p>
                                <p className='hotspot-small-print '>
                                  Your HotSpot Score is provided for
                                  entertainment purposes only and is not a
                                  guarantee of fun or enjoyment at any location.
                                  HotSpots Inc. is not responsible for a bad
                                  time or excessive wait times. Please use this
                                  information responsibly.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='col-8 chart-col'>
                            <Charts data={this.props.nightList} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNightPlan;
