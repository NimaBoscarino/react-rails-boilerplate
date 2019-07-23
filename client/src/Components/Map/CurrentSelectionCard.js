import React, { Component } from "react";

class CurrentSelectionCard extends Component {
  render() {
    return (
      <div id='CurrentSelectionCard'>
        <div className='container'>
          <div className='d-flex'>
            <div className='align-items-baseline'>
              <div className='align-items-baseline current-selection-card-div'>
                <div className='card current-card'>
                  <h5 className='card-header current-card-title'>
                    {this.props.currentSelection.name}
                  </h5>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col current-card-description'>
                        <p>col 1</p>
                      </div>
                      <div className='col current-card-info'>
                        <p>col 2</p>
                      </div>
                      <div className='col'>
                        <button className='btn btn-outline-dark btn-block'>
                          Add to my night
                        </button>
                      </div>
                    </div>

                    <h5 className='card-title'>
                      {this.props.currentSelection.address}
                    </h5>
                    <p className='card-text'>
                      Google Score:{" "}
                      {this.props.currentSelection.googleReviewScore} based on{" "}
                      {this.props.currentSelection.googleReviewNumber} reviews
                    </p>
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

export default CurrentSelectionCard;
