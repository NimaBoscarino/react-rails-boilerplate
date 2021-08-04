import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Gallery, Login, Register } from "./components";
function App() {
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

export default App;
