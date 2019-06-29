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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      data: "",
      currentUser: 0,
      current_roundup_balance: 0,
      balance_date: null,
      user_votes: [0,0,0,0,0],
      collective_votes: [0,0,0,0,0],
      charities: [],
      goals: [],
      tests: [],
      vote1:"",
      vote2:"",
      vote3:"",
      vote4:"",
      vote5:"",
      transactions: []

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
      }
    })
    .then(response => {
      this.setState({
        isLoggedIn: true,
        currentUser: response.data.user_id,
        first_name: response.data.first_name,
      })
    })
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


  handleVoteSelection = (e) => {
    e.preventDefault();
    let v1 = Number(this.state.vote1)
    let v2 = Number(this.state.vote2)
    let v3 = Number(this.state.vote3)
    let v4 = Number(this.state.vote4)
    let v5 = Number(this.state.vote5)

    let arr1 = this.state.user_votes
    arr1[v1] += 1
    arr1[v2] += 1
    arr1[v3] += 1
    arr1[v4] += 1
    arr1[v5] += 1

    let new_user_votes = [];
    this.state.user_votes.forEach(vote => {
     new_user_votes.push(vote * vote)
    })
    this.setState({
      user_votes: new_user_votes
    })
    axios.put('api/users/id', {
      user: {
      votes: new_user_votes
    }
    }).then(response => {
      this.setState({
        user_votes: response.data.user_votes,
        collective_votes: response.data.admin_votes
      });
    })
  }

  onVoteChanged = (e) => {
    this.setState({
      [e.target.name]: e.currentTarget.value
    });
  }

  getTransactions = (e) => {
    e.preventDefault();
    axios.post('api/transactions', {
      user_id: this.state.currentUser
    })
    .then(response => {
      console.log(response.data)
      this.setState({
        transactions: response.data.transaction
      })
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
            handleVoteSelection: this.handleVoteSelection,
            onVoteChanged: this.onVoteChanged,
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
