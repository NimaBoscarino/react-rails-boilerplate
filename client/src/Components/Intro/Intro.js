import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div id='Intro'>
        <div className='row title-section'>
          <div className='col'>
            <h1 className='intro-title'>Vancouver's Most Happenin' Places</h1>
            <p className='intro-summary'>
              Discover restaurants, clubs and bars that are both consistently
              busy (based on real time data) and highly rated (according to
              Google and Yelp) in Vancouver's most popular neighbourhoods.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
