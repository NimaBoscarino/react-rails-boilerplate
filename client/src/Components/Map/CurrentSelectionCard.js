import React, { Component } from "react";

class CurrentSelectionCard extends Component {
  render() {
    return (
      <div className='align-items-baseline current-selection-card-div'>
        <div className='card current-card'>
          <h5 className='card-header current-card-title'>
            {this.props.currentSelection.name}
          </h5>
          <div className='card-body'>
            <h5 className='card-title'>{this.props.currentSelection.address}</h5>
            <p className='card-text'>
              Google Score: {this.props.currentSelection.googleReviewScore}{" "}
              based on {this.props.currentSelection.googleReviewNumber} reviews
            </p>
            <a href='#' class='btn btn-primary'>
              Add to my night
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentSelectionCard;
