import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App.js';
import Login from './Login.js';
import Register from './Register.js';
import CharitySettings from './CharitySettings.js';
import Dashboard from './Dashboard.js';



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/users/:id/charity-settings" component={CharitySettings} />
      <Route exact path="/users/:id" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Router;