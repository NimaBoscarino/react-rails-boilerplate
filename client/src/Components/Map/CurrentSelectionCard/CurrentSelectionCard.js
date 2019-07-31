import React, { Component } from "react";
import CurrentSelectionModal from "./CurrentSelectionModal";
import {
  Button,
} from "reactstrap";

import { MdPhone } from "react-icons/md";
import {
  FaYelp,
  FaCreditCard
} from "react-icons/fa";
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
                        <p className="current-address">
                        {this.props.currentSelection.address}
                        </p>
                        <p className='card-price info-p'>
                        <FaCreditCard className='icon-carousel' />
                        {this.props.currentSelection.yelp_price}
                      </p>
                      <p className='card-price info-p'>
                        {this.props.currentSelection.yelp_categories.map((category)=>{return category + " "})}
                      </p>
                      <p className='card-phone info-p'>
                        <MdPhone className='icon-carousel' />
                        {this.props.currentSelection.yelp_display_phone}
                      </p>


                        <a href={this.props.currentSelection.yelp_url} target='_blank'>
                        {" "}
                        <Button outline color='light' size='sm' block>
                          <FaYelp className='yelp-icon' /> Read Yelp Reviews
                        </Button>
                      </a>

                      </div>
                      <div className='col score-col'>
                      <p classname="hot-score">
                          Current Hotspot Score:{"  "}
                          <span classname="hot-score-number">   {this.props.currentSelection.current_hot_score}</span>
                        </p>
                        <p classname="other-score">
                          Google Score:{"  "}
                          {this.props.currentSelection.rating} based on{" "}
                          {this.props.currentSelection.rating_n} reviews
                        </p>
                        <p classname="other-score">
                          Yelp Score:{"  "}
                          {this.props.currentSelection.yelp_rating} based on{" "}
                          {this.props.currentSelection.yelp_review_count}
                        </p>
                        <p>
                          Hot Score:{"  "}
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
