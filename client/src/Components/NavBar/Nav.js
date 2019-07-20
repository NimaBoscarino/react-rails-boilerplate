import React, { Component } from "react";
import Logo from "./assets/hotspot-logo.png";

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='logo-box'>
            <img className='logo' src={Logo} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
