import React, { Component } from "react";
import CurrentSelectionModal from "./CurrentSelectionModal";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import PlaceHolderPic from "../../../global-assets/eastvan.jpeg";

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
                        <CurrentSelectionModal place={this.props.currentSelection}/>
                      </div>
                      <div className='col current-card-info'>
                        <p>
                          Airy, contemporary pub & eatery offering classic &
                          modern Canadian fare, live music & trivia nights.
                        </p>
                        <p>{this.props.currentSelection.address}</p>
                      </div>
                      <div className='col score-col'>
                        <p>
                          Google Score:{"  "}
                          {this.props.currentSelection.rating} based on{" "}
                          {this.props.currentSelection.rating_n} reviews
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
