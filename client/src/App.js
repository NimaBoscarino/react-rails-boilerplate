import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import { Home, About, Gallery, Login, Register } from "./components";
import StateProvider from "./helpers/stateProvider.js";
// import { useOnClickOutside } from "./hooks";
// import {ArtistRequests, ArtistAccount} from "./componentsArtist";
// import {UserCommission, UserAccount} from "./componentsUser";

import ArtistRequests from "./componentsArtist/ArtistRequests.jsx";
import ArtistAccount from "./componentsArtist/ArtistAccount.jsx";
import UserCommission from "./componentsUser/UserCommission";
import UserAccount from "./componentsUser/UserAccount.jsx";
// import axios from "axios";
import "./App.css";

// const categoriesWithArtistsAndRequests = categories.map((category) => ({
//   ...categories,
//   artists: filterTableById(artists, category.id, "category_id"),
//   requests: filterTableById(requests, category.id, "category_id"),
// }));

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  console.log("Re-render check");

  return (
    <StateProvider>
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
    </StateProvider>
  );
}

export default App;
