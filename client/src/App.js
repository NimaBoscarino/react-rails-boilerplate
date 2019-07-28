import React, { Component } from "react";
import "./styles.css";
import Main from "./home_page/Main";
import Areas from "./home_page/Areas";
//include this import if the component uses routes & links
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <Route path='/' exact component={Main} />
          <Route path='/areas' exact component={Areas} />
      </Router>
    );
  }
}

export default App;
