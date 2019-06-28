import React, { Component } from 'react';
import loginImg from './login.svg'

class Login extends Component {
  render() {
    const {
      handleInputChange: handleChange,
      handleLogin,
    } = this.props;

    return (
      <div>
      {/*<NavBar mainState={this.props.mainState} />*/}
      <div className="base.container">
        <form onSubmit={handleLogin} >
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="email" name="email" placeholder="email" onChange={handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn" >
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;