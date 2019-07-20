import React, { Component } from "react";
import "./styles.css";
import Nav from "./home_page/Header";
import Main from "./home_page/Main";
import Areas from "./home_page/Areas";
//include this import if the component uses routes & links
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Nav />
        <Route path='/' exact component={Main} />
        <Route path='/areas' exact component={Areas} />
      </Router>
    );
  }
}

export default App;
