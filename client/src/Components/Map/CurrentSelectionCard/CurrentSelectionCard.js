import React, { Component } from "react";
import CurrentSelectionModal from "./CurrentSelectionModal";
import { Button } from "reactstrap";

import { MdPhone } from "react-icons/md";
import { FaYelp, FaCreditCard } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

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
                      <div className='col current-card-info'>
                        <p className='card-type info-p'>
                          <span className='titles'>Tags: </span>
                          {this.props.currentSelection.yelp_categories.map(
                            category => {
                              return category + " ";
                            }
                          )}
                        </p>
                        <p className='current-address info-p'>
                          <span className='titles'>Address: </span>
                        </p>
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

                        <p className='card-average-wait info-p'>
                          <span className='titles'>Avg Time Spent: </span>
                          {this.props.currentSelection.time_spent_max} mins.
                        </p>
                      </div>
                      <div className='col score-col'>
                        <p classname='hot-score-title'>
                          Current Hotspot Score:{"  "}{" "}
                        </p>
                        <p classname='hot-score-number'>
                          {this.props.currentSelection.current_hot_score}
                        </p>
                      </div>
                    </div>

                    <button
                      className='btn btn-outline-light add-to-night-button'
                      onClick={() => {
                        this.props.addSelection(this.props.currentSelection.id);
                      }}>
                      Save Place <IoMdAdd className='icon-plus' />
                    </button>
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
