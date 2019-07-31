import React, { Component } from "react";
import CurrentSelectionModal from "./CurrentSelectionModal";
import icon from "../../../global-assets/hotspot-score-icon-small.png";
import { FiChevronsRight } from "react-icons/fi";

class CurrentSelectionCard extends Component {
  render() {
    return (
      <div id='CurrentSelectionCard'>
        <div className='container'>
          <div className='d-flex'>
            <div className='align-items-baseline'>
              <div className='align-items-baseline current-selection-card-div'>
                <div className='card current-card'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col score-col'>
                        <h5 className='current-place-title'>
                          {this.props.currentSelection.name}
                        </h5>
                        <p className='current-address types info-p'>
                          {this.props.currentSelection.yelp_categories.map(
                            category => {
                              return category + " ";
                            }
                          )}
                        </p>
                        <p className='hot-score-number'>
                          {this.props.currentSelection.current_hot_score}
                        </p>

                        <p className='hot-score-title'>
                          {" "}
                          Current Hot Score{"  "}{" "}
                          <img className='hotspot-icon' src={icon} alt={""} />
                          <span class='badge badge-light pulse'>LIVE</span>{" "}
                        </p>
                      </div>

                      <div className='col current-card-info'>
                        <p className='current-address info-p'>
                          {this.props.currentSelection.address}
                        </p>
                        <p className='card-price info-p'>
                          <span className='titles'>Price: </span>
                          {this.props.currentSelection.yelp_price}
                        </p>

                        <p className='card-phone info-p'>
                          <span className='titles'>Phone: </span>
                          {this.props.currentSelection.yelp_display_phone}
                        </p>
                        <p className='other-score info-p'>
                          Google Score:{"  "}
                          {this.props.currentSelection.rating}/5 based on{" "}
                          {this.props.currentSelection.rating_n} reviews
                        </p>
                        <p className='other-score info-p'>
                          Yelp Score:{"  "}
                          {this.props.currentSelection.yelp_rating}/5 based on{" "}
                          {this.props.currentSelection.yelp_review_count}
                        </p>
                      </div>

                      <div className='col current-card-pic-col'>
                        <img
                          className='current-card-pic'
                          src={this.props.currentSelection.yelp_photos[0]}
                          alt={""}
                        />
                        <CurrentSelectionModal
                          place={this.props.currentSelection}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className='btn btn-outline-light add-to-night-button'
                  onClick={() => {
                    this.props.addSelection(this.props.currentSelection.id);
                  }}>
                  <img className='hotspot-icon-button' src={icon} alt={""} />{" "}
                  Add to List <FiChevronsRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentSelectionCard;
