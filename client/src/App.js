import React, { Component } from "react";
import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Gallery, Login, Register } from "./components";
// import {ArtistRequests, ArtistAccount} from "./componentsArtist";
// import {UserCommission, UserAccount} from "./componentsUser";

import ArtistRequests from "./componentsArtist/ArtistRequests.jsx";
import ArtistAccount from "./componentsArtist/ArtistAccount.jsx";
import UserCommission from "./componentsUser/UserCommission";
import UserAccount from "./componentsUser/UserAccount.jsx";
import axios from "axios";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  console.log("Promise me something");
  axios.get("/api/data").then((response) => console.log(response));
  Promise.all([
    axios.get("api/clients"),
    axios.get("/api/artists"),
    axios.get("/api/categories"),
    axios.get("/api/reviews"),
    axios.get("/api/comments"),
    axios.get("/api/requests"),
    axios.get("/api/messages"),
  ])
    .then((response) => {
      const clients = response[0].data;
      const artists = response[1].data;
      const categories = response[2].data;
      const reviews = response[3].data;
      const comments = response[4].data;
      const requests = response[5].data;
      const messages = response[6].data;
      console.log(
        "this is state",
        clients,
        artists,
        categories,
        reviews,
        comments,
        requests,
        messages
      );
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>

        <div className="router">
          <Router>
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" component={() => <About />} />
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/login" component={() => <Login />} />
              <Route path="/register" component={() => <Register />} />
              <Route
                path="/ArtistRequests"
                component={() => <ArtistRequests />}
              />
              <Route
                path="/ArtistAccount"
                component={() => <ArtistAccount />}
              />
              <Route
                path="/UserCommission"
                component={() => <UserCommission />}
              />
              <Route path="/UserAccount" component={() => <UserAccount />} />
            </Switch>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
