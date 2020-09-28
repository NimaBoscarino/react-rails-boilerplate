import React, {  useState } from 'react';
import axios from 'axios';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Activities from './components/Activities';

function App (props){
  
    return(
      <Switch>
        <Route exact path='/' component={Activities}/>

        
      </Switch>
    )
  
}

export default App;
