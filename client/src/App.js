import React, { Component, Children, cloneElement } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import PlaidLink from 'react-plaid-link';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      currentUser: 0,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      data: "",
      currentUserId: 0,
      currentUser: null,
      current_roundup_balance: 0,
      balance_date: null,
      plaid_token: "",
      user_votes: [],
      collective_votes: [],
      charities: [],
      goals: [],
      tests: []

    }
  };

 componentDidMount() {
    axios.get('/api/charities', {withCredentials: true})

    .then((response) => {
      this.setState({
        charities: response.data.charities,
        tests: response.data.tests
      })
      console.log(response.data)
    })

    axios.get('/api/goals', {withCredentials: true})
    .then((response) => {
      this.setState({
        goals: response.data.goals
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
        currentUser: 0,
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
    axios.post('/api/session', {
        email: this.state.email,
        password: this.state.password,
    })
    .then(response => {
      this.setState({
        isLoggedIn: true,
        authentication_token: response.data.authentication_token,
        currentUser: response.data.user_id,
        first_name: response.data.first_name
      })
    })
  };

  handleLogout = (e) => {
    e.preventDefault();
    axios.delete('/api/session')
    this.setState({
        isLoggedIn: false,
        authentication_token: "",
    })
  };


  getDashboardInfo = () => {
    axios.get('api/session')
    .then(response => {
      this.setState({
        current_roundup_balance: response.data.currentUser.current_roundup_balance,
        balance_date: response.data.currentUser.balance_date,
        plaid_token: response.data.currentUser.plaid_token,
        user_votes: response.data.currentUser.votes,
      })
    })
  }

  getTransactions = (e) => {
    e.preventDefault();
    axios.post('api/transactions', {
      user_id: this.state.currentUser
    })
    .then(response => {
      console.log(response.data)
    })
  }

  withRoute = child => {
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
            isLoggedIn: this.isLoggedIn,
            getDashboardInfo: this.getDashboardInfo,
            changeLoggedIn: this.changeLoggedIn,
            getTransactions: this.getTransactions,
            ...routeProps
          }
          )}
        />);
  }

   handleOnSuccess = (token, metadata) => {
    // send token to client server
    console.log(token)
    console.log(metadata)

    axios.post('/api/items', {
      item: {
      public_token: token,
      institution_name: metadata.institution.name,
      institution_id: metadata.institution.institution_id,
      user_id: this.state.currentUser
    }
    })
    .then(res => {
      console.log(res.data)
    })
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
        {Children.map(children, this.withRoute)}
        <PlaidLink
          clientName="Change Collective"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="a165568792fe5fd82ba0f4ecbef6da"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}>
          Open Link and connect your bank!
        </PlaidLink>

      </div>
    );
  }
}

export default App;
