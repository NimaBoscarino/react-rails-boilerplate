import React from 'react';
import loginImg from './login.svg'

export class Login extends React.Component {


  render() {
    return (
      <div className="base.container">
        <form onSubmit={this.props.handleSubmit} >
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="email" name="email" placeholder="email" onChange={this.props.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" onChange={this.props.handleChange}/>
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
    );
  }
}