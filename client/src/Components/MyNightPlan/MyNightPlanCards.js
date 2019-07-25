import React, { Component } from "react";

class MyNightPlanCards extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-4'>
          <div class='card time-stats-card'>
            <div class='card-body time-stats-card-body'>
            <p class='time-stats-card-text'>This is some text within a card body.</p>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div className='p-2'>
            <div className='card'>
              <div className='card-header my-night-out-title'>
                {this.props.place.name}
              </div>
              <div className='card-body'>
                <div className='card-body my-night-out-details'>
                  <p>
                    Google Review Score: {this.props.place.rating} <br />
                    Google Review Number: {this.props.place.rating_n}
                  </p>
                </div>

                <footer className='blockquote-footer my-night-bottom-controls'>
                  <p>this is where controls will go</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNightPlanCards;
