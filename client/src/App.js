import React, { Component, cloneElement } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

// import Router from './components/Router.js';

import NavBar from './components/NavBar.js';
import HeroSection from './components/HeroSection.js';


import Login from './components/Login.js';
import Register from './components/Register.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      isLoggedIn: false,
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      password_confirmation: "",
      data: "",
      cookie: "",
    }
  };

  fetchData = (e) => {
    e.preventDefault();
    debugger;
    axios.get('/api/users', {withCredentials: true}) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log("response:", response.data) // The entire response from the Rails API

      // console.log(response.data.users) // Just the message
      // this.setState({
      //   message: response.data.users[0].email
      // });
    })

  };

  handleRegister = (e) =>  {
    e.preventDefault();
    axios.post('/api/users', {
      user: {
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password_confirmation: this.state.password_confirmation,
        currentUser: "",
        isLoggedIn: false,
        authentication_token: ""
      }
    })
    .then(response => {
      this.setState({
        isLoggedIn: true,
        currentUser: response.data.first_name,
      })
    }).then(axios.get('/api/users', {withCredentials: true}) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.users) // Just the message
      // this.setState({
      //   message: response.data.users[0].email
      // });
    }))
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleLogin = (e) => {
    e.preventDefault();
    axios.post('/api/sessions', {
        email: this.state.email,
        password: this.state.password,
    })
    .then(response => {
      this.setState({
        isLoggedIn: true,
        authentication_token: response.data.authentication_token,
      })
    })
  };

  handleLogout = (e) => {
    e.preventDefault();
      this.setState({
        isLoggedIn: false,
        authentication_token: "",
    })
  };

  withRoute = child => (
    <Route
      exact={child.props.exact || !!child.props.path}
      key={child.name}
      path={child.props.path || '/'}
      render={routeProps => cloneElement(
        child,
        {
          mainState: this.state,
          handleLogin: this.handleLogin,
          handleRegister: this.handleRegister,
          handleInputChange: this.handleInputChange,
          fetchData: this.fetchData,
          ...routeProps
        }
        )}
      />);


  render() {
    const {
      children
    } = this.props;

    const enhancedChildren =
      Array.isArray(children)
        ? children.map(this.withRoute)
        : this.withRoute(children);

    return (
      <div className="App">
        {enhancedChildren}
      </div>
    );
  }
}

export default App;
