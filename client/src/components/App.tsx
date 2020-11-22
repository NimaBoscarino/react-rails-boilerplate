import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import {Navigation} from './Navigation';

export const App = ():JSX.Element => {
  return (
    <div className='App'>
      <Navigation />
    </div>
  );
}
