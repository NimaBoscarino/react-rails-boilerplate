import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Areas extends Component{
  render(){
    return (
    <div>
    <h1>This is the areas page</h1>
    <h2><Link to="/">Home Page</Link></h2>
    </div>
    )
  }
}

export default Areas;