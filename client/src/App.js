import React, { Component } from "react";
import "./styles.css";
import Nav from "./Components/NavBar/Nav";
import Main from "./home_page/Main";
import Areas from "./home_page/Areas";
import Background from "./global-assets/background-bottom.png";
//include this import if the component uses routes & links
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <section style={sectionStyle}>
          <Nav />
          <Route path='/' exact component={Main} />
          <Route path='/areas' exact component={Areas} />
        </section>
      </Router>
    );
  }
}

export default App;
