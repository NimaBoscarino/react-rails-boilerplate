import React, { Component } from "react";
import PlaceHolderPic from "../../global-assets/irish-heather-gastown.png";
import { FaRegClock } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

class HotListCards extends Component {
  render() {
    return (
      <div className='HotListCards'>
        <div className='card hot-list-card-container'>
          <div className='card-container'>
            <div className='card'>
              <h5 className='card-header hot-list-title'>Alibi Room</h5>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm'>
                    <div className='hot-list-image-box'>
                      <img className='hot-list-image' src={PlaceHolderPic} />
                    </div>
                  </div>

                  <div className='col-6'>
                    <div className='row'>
                      <span className='badge badge-pill badge-success'>
                        <FaRegClock /> Average Wait Time: 25 mins.
                      </span>
                    </div>

                    <div className='row'>
                      <p className='card-text hot-list-description'>
                        Heritage building with 50 taps of local & imported craft
                        beers, plus a menu of locally sourced food.Heritage
                        building with 50 taps of local & imported craft beers,
                        plus a menu of locally sourced food.
                      </p>
                    </div>
                    <div className='row'>
                      <h4 className='hot-list-user-reviews-title'>
                        Reviewers Tend To Mention:
                      </h4>
                      <div className='user-reviews-body'>
                        <p className='card-text hot-list-user-reviews'>
                          <span className='badge badge-pill badge-info'>
                            Good Food
                          </span>
                          <span className='badge badge-pill badge-info'>
                            Fun
                          </span>
                          <span className='badge badge-pill badge-info'>
                            Hip Place
                          </span>
                          <span className='badge badge-pill badge-info'>
                            Good Beer
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col hot-list-score-col'>
                    <div className='card hot-list-score-card'>
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                          <div className='hotspot-review'>HotSpot Score</div>
                          <div className='hotspot-review-score'>87</div>
                        </li>
                        <li className='list-group-item'>
                          <div className='review-icons'>
                            <FaGoogle />
                          </div>
                          <div className='google-review'>Google Review:</div>
                          <div className='google-review-score'>4/5</div>
                          <div className='review-stats'>
                            (Based on 453 reviews)
                          </div>
                        </li>
                        <li className='list-group-item'>
                          <div className='review-icons'>
                            <FaYelp />
                          </div>
                          <div className='yelp-review'>Yelp Review:</div>
                          <div className='yelp-review-score'>4/5</div>
                          <div className='review-stats'>
                            (Based on 453 reviews)
                          </div>
                        </li>
                      </ul>
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

export default HotListCards;
