import React, { Component } from "react";
import Logo from "../../global-assets/hotspots-logo.png";


class Nav extends Component {
  render() {
    return (
      <div id='Footer'>
        <div className='container-fluid footer-main-div'>
          <div className='row footer-row'>
   

            <div className='col'>
            <h6>HotSpot Inc.</h6>
              <p className='footer-list'>About Us</p>
              <p className='footer-list'>Careers</p>
              <p className='footer-list'>Privacy Policy</p>
          
            </div>

            <div className='col'>
            <h6>Advertising</h6>
              <p className='footer-list'>Getting Started</p>
              <p className='footer-list'>Advertiser Login</p>
              <p className='footer-list'>Advertising FAQs</p>
            </div>

            <div className='col'>
              <h6>Quick Links</h6>
              <p className='footer-list'>Neighbouhoods</p>
              <p className='footer-list'>Register My Location</p>
              <p className='footer-list'>Premium Login</p>
            </div>

            <div className='col'>
              <div className='footer-logo-box'>
                <img className='logo-footer' src={Logo} alt='' />
                <p className='copy-text'>&copy; 2019 HotSpotsApp.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
