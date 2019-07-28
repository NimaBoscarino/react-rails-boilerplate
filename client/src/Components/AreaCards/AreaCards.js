import React, { Component } from "react";
import GastownTest from "./assets/irish-heather-gastown.jpg";

class AreaCards extends Component {

  makeScore(propped) {
    const yelp = propped.place.yelp_rating / 5 * 25
    const google = propped.place.rating / 5 * 25
    const busy = propped.place.popular_times[0].busy_value * 0.5

    return Math.ceil(yelp + google + busy)
  }

  render() {
    return (
      <div id='AreaCards' className='card-container'>
        <div className='card area-card' style={{ width: "18rem" }}>
          <img
            className='card-img-top area-picture'
            src={GastownTest}
            alt='Card cap'
          />
          <div className='card-body'>
            <div className='row'>
              <div className='col-8'>
                <h5 className='card-title area-title'>Gastown</h5>
                <p className='area-wait-time'>
                  Average Wait Time:{" "}
                  <span className='wait-time-average'>35 min</span>
                </p>
              </div>
              <div className='col-4 busy-score-div float-right'>
                <p className='busy-score-number'>87</p>
              </div>
            </div>

            <p className='card-text area-description'>
              A trendy food and drink scene includes chic cocktail lounges and
              restaurants serving everything from gourmet sandwiches to local
              seafood.
            </p>
          </div>

          <div className='container small-list-main'>
            <h4 className='current-busy-list-title'>Currently Busy</h4>

            <div className='row'>
              <div className='col-2 small-list-section'>
                <div className='busy-score-small-div'>
                  <p className='busy-score-small'>87</p>
                </div>
              </div>
              <div className='col-10'>
                <div className='area-small'>
                  <p className='small-list-title'>The Red Room</p>
                  <p className='small-list-type'>Restaurant</p>
                </div>
                <div className='wait-time-small'>
                  <p className='wait-minute-min'>
                    25<span className='small-min'> mins</span>
                  </p>
                  <p className='wait-minute-small-text'> Est. Wait Time</p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-2 small-list-section'>
                <div className='busy-score-small-div'>
                  <p className='busy-score-small'>87</p>
                </div>
              </div>
              <div className='col-10'>
                <div className='area-small'>
                  <p className='small-list-title'>The Red Room</p>
                  <p className='small-list-type'>Restaurant</p>
                </div>
                <div className='wait-time-small'>
                  <p className='wait-minute-min'>
                    25<span className='small-min'> mins</span>
                  </p>
                  <p className='wait-minute-small-text'> Est. Wait Time</p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-2 small-list-section'>
                <div className='busy-score-small-div'>
                  <p className='busy-score-small'>87</p>
                </div>
              </div>
              <div className='col-10'>
                <div className='area-small'>
                  <p className='small-list-title'>The Red Room</p>
                  <p className='small-list-type'>Restaurant</p>
                </div>
                <div className='wait-time-small'>
                  <p className='wait-minute-min'>
                    25<span className='small-min'> mins</span>
                  </p>
                  <p className='wait-minute-small-text'> Est. Wait Time</p>
                </div>
              </div>
            </div>
          </div>

          <div className='card-body card-footer-link'>
            <a href='/' className='card-link'>
              See All Gastown
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AreaCards;
