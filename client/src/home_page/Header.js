import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Header extends Component{
  render(){
    return (
    <div>
    <h1>This is a header</h1>
    <h2><Link to="/">Home Page</Link></h2>
    </div>
    )
  }
}

export default Header;