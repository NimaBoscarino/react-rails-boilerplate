import React, { Component } from "react";
import MyNightPlanCards from "./MyNightPlanCards";

import Charts from "../Charts/Charts";

class MyNightPlan extends Component {
  componentDidMount() {
    document
      .getElementById("MyNightPlan")
      .scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className='container w-100'>
        <div id='MyNightPlan'>
          <div className='row my-night-title-row'>
            <div className='col'>
              <h1 className='my-night-title'>My Night</h1>
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
                    <h5 className='stats-title'>Your Night Stats</h5>
                  </div>
                  <div className='card-body'>
                    <div className='card-body card-text'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                    </div>

                    <footer className='blockquote-footer my-night-bottom-controls'>
                      <p>this is where controls will go</p>
                    </footer>
                  </div>
                </div>
              </div>

              <div className='card stats-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Night Stats</h5>

                  <div className='flex stats-box'>
                    <div className='row justify-content-md-center'>
                      <div className='col-md-auto y-title-col'>
                        <h6 className='y-axis-label'>Busy Level</h6>
                      </div>

                      <div className='col chart-col'>
                        <Charts data={this.props.nightList} />
                      </div>
                    </div>

                    <div className='row justify-content-md-center'>
                      <div className='col x-title-col'>
                        <h6 className='x-axis-label'>Time of Day</h6>
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
