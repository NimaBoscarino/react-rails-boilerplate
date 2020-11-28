import React, { useState } from 'react';
import './App.css';
import { Navigation } from './Navigation';
// 
export const App = ():React.ReactElement => {
  return (
    <div className='App'>
      <Navigation />
    </div>
  );
}
