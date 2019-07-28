import React, { Component } from "react";
import HotSpotIcon from "../../global-assets/hotspot-score-icon-small.png";
import HotSpotLogo from "../../global-assets/hotspots-logo.png";

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='logo-box'>
            <img className='logo' src={HotSpotLogo} alt='' />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
