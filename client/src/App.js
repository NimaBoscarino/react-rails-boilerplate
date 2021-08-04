import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {Home, About, Gallery, Login, Register } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

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
          <Route path="/gallery" ><Gallery/></Route>
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
        </Switch>
      
      </Router>
        </div>
        <div>
      
        </div>
        
      </>
    </ThemeProvider>
  );
}

export default App;


/*import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme } from './theme';
import { Navigation, Footer, Home, About, Gallery, Login, Register, Menu } from "./components";
function App() {
  const [open, setOpen] = useState(false)
  return (
    
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" component={() => <About />} />
          <Route path="/gallery" ><Gallery/></Route>
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
    
  );
}

export default App; */
