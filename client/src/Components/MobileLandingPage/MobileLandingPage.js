import React, { Component } from "react";
import MobileLandingIcon from "./mobile-landing-page.png"
import icon from "../../global-assets/hotspot-score-icon-small.png";

class MobileLandingPage extends Component {
  render() {
    return (
      <div id='MobileLandingPage'>
      <div className='container-fluid mobile-container'>
      
      <div className='row'>

      <div className='mobile-landing-page-icon-box'>
      <img className='mobile-landing-page-icon' src={MobileLandingIcon} alt={""} />
      

      </div>

  

      <div className=' container-fluid mobile-landing-page-text-div'>

      <p className='mobile-landing-text' >For now, HotSpots is best experienced on desktop <br /><span className='small-print-mobile'>(We're working on a mobile optimized version)</span></p>
  

     
      </div>

      </div>

      </div>

      </div>
    );
  }
}

export default MobileLandingPage;
