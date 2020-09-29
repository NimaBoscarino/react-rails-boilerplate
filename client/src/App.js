import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Activities from './components/Activities';
import NavigBar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  return (
    <Router>
      <NavigBar></NavigBar>
      <Banner></Banner>

      <Switch>
        <Route path='/' component={Activities} />


      </Switch>
      <Footer></Footer>
    </Router>
  )

}

export default App;
