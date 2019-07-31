import React, { Component } from "react";
import CurrentSelectionModal from "./CurrentSelectionModal";
import icon from "../../../global-assets/hotspot-score-icon-small.png";
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
                        <p className='current-address info-p titles-tag'>
                          <span className='titles'>Tags: </span>
                        </p>
                        <p className='current-address types info-p'>
                          {this.props.currentSelection.yelp_categories.map(
                            category => {
                              return category + " ";
                            }
                          )}
                        </p>
                        <p className='current-address info-p address-tag'>
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
                      </div>
                      <div className='col score-col'>
                        <p className='hot-score-number'>
                          {this.props.currentSelection.current_hot_score}
                        </p>

                        <div className='title-div'>
                          <p className='hot-score-title'>
                            {" "}
                            Current Hot Score{"  "}{" "}
                            <img className='hotspot-icon' src={icon} alt={""} />
                          </p>
                          <p className="live">
                            {" "}
                            <span class='badge badge-light pulse'>LIVE</span>
                          </p>
                        </div>
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
