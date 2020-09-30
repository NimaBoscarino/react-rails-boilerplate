import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigBar from './components/Navbar';
import Banner from './components/Banner';
import Activities from './components/Activities';
import Activity from './components/detail/Activity'
import Bookings from './components/Bookings';
import Footer from './components/Footer';

function App(props) {

  return (
    <Router>
      <NavigBar></NavigBar>
      <Banner></Banner>

      <Switch>
        <Route exact path='/api/users/:id' component={Bookings}/>
        <Route exact path='/' component={Activities} />
        <Route exact path='/activities/:id' component={Activity} />
      </Switch>

      <Footer></Footer>
    </Router>
  )
}

export default App;
