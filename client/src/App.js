import React, {  useState } from 'react';
import axios from 'axios';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Activities from './components/Activities';
import Activity from './components/detail/Activity'

function App (props){
  
    return(
      <Switch>
        <Route exact path='/' component={Activities}/>
        <Route exact path='/activities/:id' component={Activity}/>
        
      </Switch>
    )
  
}

export default App;
