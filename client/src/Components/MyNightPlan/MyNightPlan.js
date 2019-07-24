import React, { Component } from "react";
import MyNightPlanCards from './MyNightPlanCards';

class MyNightPlan extends Component {
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
            <div className='col-4 d-flex align-items-stretch stat-div '>
              <div className='card stats-card'>
                <div className='card-body'>
                  <h5 className='card-title'>Your Night Stats</h5>
                  <div className='stats-box'>
                    
                  <p>Here's where you can put some stats!</p>
                  <p>Here's where you can put some stats!</p>
                  <p>Here's where you can put some stats!</p>
                  <p>Here's where you can put some stats!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-8 d-flex flex-column night-out-card-div'>
              <MyNightPlanCards />
              <MyNightPlanCards />
              <MyNightPlanCards />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNightPlan;
