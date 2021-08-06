import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import UserAccount from "./componentsUser/UserAccount.jsx"
import UserCommission from "./componentsUser/UserCommission"

import FilterBar from "./componentsArtist/FilterBar.jsx"
import Button from "./componentsArtist/Button.jsx"
import UserGallery from "./componentsUser/UserGallery.jsx"
import Payment from "./componentsUser/Payment.jsx"
import ArtistRequests from "./componentsArtist/ArtistRequests.jsx"
import ArtistAccount from "./componentsArtist/ArtistAccount.jsx"


ReactDOM.render(<App />, document.getElementById('root'));
