import React, { Component } from "react";
import CurrentSelectionModal from "./CurrentSelectionModal";
import { FaAngleDoubleRight } from "react-icons/fa";

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
                        <p>
                          Airy, contemporary pub & eatery offering classic &
                          modern Canadian fare, live music & trivia nights.
                        </p>
                      </div>
                      <div className='col current-card-info'>
                        <p>{this.props.currentSelection.address}</p>
                      </div>
                      <div className='col score-col'>
                        <p>
                          Google Score:{"  "}
                          {this.props.currentSelection.googleReviewScore} based
                          on {this.props.currentSelection.googleReviewNumber}{" "}
                          reviews
                        </p>
                      </div>
                    </div>

                    <button
                      className='btn btn-outline-light add-to-night-button'
                      onClick={() => {
                        this.props.addSelection(this.props.currentSelection.id);
                      }}>
                      Add To Plan{" "}
                      <span className='icon-arrows'>
                        {" "}
                        <FaAngleDoubleRight />
                      </span>
                    </button>

                    <h5 className='card-title'>
                      {this.props.currentSelection.address}
                    </h5>
                    <CurrentSelectionModal />
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
