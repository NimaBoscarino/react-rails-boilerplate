import React, { Component } from "react";
import MyNightPlanCards from "./MyNightPlanCards";
import { FaChartLine, FaInfoCircle } from "react-icons/fa";

import Charts from "../Charts/Charts";

class MyNightPlan extends Component {
  render() {
    return (
      <div id='MyNightPlan'>
        <div className='container-fluid my-night-container w-100 p-0 m-0'>
          <div className='my-night-container'>
            <div className='row my-night-title-row'>
              <div className='col'>
                <h1 className='my-night-title'>My Night</h1>
                <p className='my-night-intro'>
                  {" "}
                  <FaInfoCircle className="info-circle-icon" />
                  Suggested time is provided as an estimate of when to arrive to avoid excessive wait
                  times.
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
                          <FaChartLine />
                        </span>{" "}
                        Your Night Stats
                      </h5>
                    </div>
                    <div className='card-body'>
                      <div className='card-body card-text'>
                        <div className='row'>
                          <div className='col-4 chart-col'>
                            <div className='col hotspot-score-col d-flex align-items-stretch'>
                              <div className='row w-100'>
                                <h5 className='hotspot-score-title '>
                                  Your Night's HotSpot Score
                                </h5>

                                <p className='hotspot-score-number'>
                                  {this.props.nightList.reduce(
                                    (acc, cur) => acc + cur.current_hot_score,
                                    0
                                  )}
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
