import React, { Component } from "react";
import Logo from "../../global-assets/hotspots-logo.png";

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='logo-box'>
            <img className='logo' src={Logo} alt='' />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
