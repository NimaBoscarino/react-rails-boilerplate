import React from 'react';
import App from '../App.js';
import Login from './Login.js';
import Register from './Register.js';
import CharitySettings from './CharitySettings.js';
import Dashboard from './Dashboard.js';
import HeroSection from './HeroSection.js';
import NavBar from './NavBar';



const Routes = () => (
  <App>
    <NavBar />
    <HeroSection path="/" />
    <Login path="/login" />
    <Register path="/register" />
    {/*<CharitySettings path="/users/:id/:charity-settings" />*/}
    <Dashboard path="/dashboard" />
  </App>
);

export default Routes;