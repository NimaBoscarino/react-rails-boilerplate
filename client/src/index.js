import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ArtistRequests from "./componentsArtist/ArtistRequests.jsx";
import ArtistAccount from "./componentsArtist/ArtistAccount.jsx";
import * as serviceWorker from "./serviceWorker";
import UserAccount from "./componentsUser/UserAccount.jsx";

ReactDOM.render(<ArtistAccount />, document.getElementById("root"));

// import FilterBar from "./componentsArtist/FilterBar.jsx"
// import Button from "./componentsArtist/Button.jsx"
// import UserGallery from "./componentsUser/UserGallery.jsx"
// import Payment from "./componentsUser/Payment.jsx"
// import ArtistRequests from "./componentsArtist/ArtistRequests.jsx"

// import UserCommission from "./componentsUser/UserCommission"
// import UserAccount from "./componentsUser/UserAccount.jsx"
