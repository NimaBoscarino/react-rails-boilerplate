import React, { Component, Children, cloneElement } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import PlaidLink from 'react-plaid-link';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      isLoggedIn: true,
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      password_confirmation: "",
      data: "",
      cookie: "",
      charities: [],
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
 componentDidMount() {

    axios.get('/api/charities', {withCredentials: true})
    .then((response) => {
      this.setState({
        charities: response.data.charities
      })
      console.log(response.data)
    })

}

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

  withRoute = child => {
    console.log('stuff', child)
    return (
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
  }
  handleOnSuccess(token, metadata) {
    // send token to client server
    console.log(token)
  }
  handleOnExit(err) {
    // handle the case when your user exits Link
    console.log(err)
  }

  render() {
    const {
      children
    } = this.props;

    return (
      <div className="App">
        <PlaidLink
          clientName="Change Collective"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="1d43b9e5858da3ef902e49151f1374"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}>
          Open Link and connect your bank!
        </PlaidLink>
        {Children.map(children, this.withRoute)}
      </div>
    );
  }
}

export default App;
