import React, { Component } from "react";

class MyNightPlanCards extends Component {
  render() {
    return (
      <div className='p-2'>
        <div className='card'>
          <div className='card-header my-night-out-title'>The Gastown Pub</div>
          <div className='card-body'>
            <div className='card-body my-night-out-details'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>

            <footer class='blockquote-footer my-night-bottom-controls'>
              <p>this is where controls will go</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNightPlanCards;
