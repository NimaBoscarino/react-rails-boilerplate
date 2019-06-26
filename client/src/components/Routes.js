import React from 'react';
import App from '../App.js';
import Login from './Login.js';
import Register from './Register.js';
import CharitySettings from './CharitySettings.js';
import Dashboard from './Dashboard.js';
import HeroSection from './HeroSection.js';
import NavBar from './NavBar';
import Charity from './Charity';
import axios from 'axios';
import { Switch } from 'react-router-dom';


const isAuth = () => {
    axios.get('/api/session')
    .then((response) => {
      return response.isLoggedIn
    })
};

const Routes = () => (
  <App>
    <NavBar />
    <HeroSection exact path="/" />
    <Login  exact path="/login" />
    <Register path="/register" />
    <Charity path="/charities" />
    {isAuth ? (
      <Switch>
        <Dashboard path="/dashboard" />
      </Switch>
      )
      : (
      <Switch>
        <Login exact path ="/login" />
      </Switch>
      )}
  </App>
);

export default Routes;