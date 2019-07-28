import React, { Component } from "react";

class NightOutBuilder extends Component {
  render() {
    return (
      <div id='NightOutBuilder'>
        <div className='container-fluid'>
          <div className='d-flex justify-content-center night-out-intro-div'>
            <p className='night-out-intro'>
              Discover restaurants, clubs and bars that are both consistently
              busy (based on real time data) and highly rated (according to
              Google and Yelp) in Vancouver's most popular areas.
            </p>
          </div>

          <div className='d-flex justify-content-center'>
            <button className='btn btn-outline-light'>
              Suggest a Night Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NightOutBuilder;
