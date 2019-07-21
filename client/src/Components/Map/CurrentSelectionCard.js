import React from "react";
import PlaceholderPic from "../../global-assets/gastown.jpg";

function CurrentSelectionCard() {
  return (
    <div className='d-flex align-items-end w-100'>
      <div className='d-flex current-selection-card'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img
                className='current-selection-pic'
                src={PlaceholderPic}
                alt=''
              />
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-8'>
                  {" "}
                  <h1 className='current-selection-title'>The Gastown Pub</h1>
                  <h2 className='current-selection-details'>
                    Pub / Restaurant
                  </h2>
                </div>
                <div className='col-4 '>
                  <p className='wait-time'>Current Wait Time 25 mins</p>
                </div>
              </div>

              <p className='current-selection-description'>
                This lively gastropub offers shared plates & a wide selection of
                beer & spirits in a historic space.
              </p>
            </div>
            <div className='col p-0 m-0'>
              <ul className='current-selection-hotspot-score-list'>
                <li className='list-group-item current-selection-report-card'>
                  <p className='hotspot-report-card'>Hotspot Score</p>
                  <div className='hotspot-score float-right'>
                    <p className='hotspot-score-number'>87</p>
                  </div>
                </li>
                <li className='list-group-item current-selection-report-card'>
                  Google Score (264 Reviews)
                  <div className='hotspot-score float-right'>
                    <p className='google-score-number'>87</p>
                  </div>
                </li>
                <li className='list-group-item current-selection-report-card'>
                  Yelp Score (120 Reviews)
                  <div className='hotspot-score float-right'>
                    <p className='yelp-score-number'>87</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentSelectionCard;
