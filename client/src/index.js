import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArtistRequests from "./componentsArtist/ArtistRequests.jsx"
import ArtistAccount from "./componentsArtist/ArtistAccount.jsx"
import FilterBar from "./componentsArtist/FilterBar.jsx"

import UserGallery from "./componentsUser/UserGallery.jsx"
import Payment from "./componentsUser/Payment.jsx"
import UserCommission from "./componentsUser/UserCommission"
import UserAccount from "./componentsUser/UserAccount.jsx"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ArtistRequests />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();