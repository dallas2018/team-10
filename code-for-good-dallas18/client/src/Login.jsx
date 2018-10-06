import React, { Component } from 'react';
import fire from './fire.js';
import styles from './Login.module.css';

class Login extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="login">
        <h1 className={styles.loginHeader}>Login</h1>
        <span>Email</span>
        <input type="email" name="Email" defaultValue=""/><br/>
        <span>Password</span>
        <input type="password" name="Password" defaultValue=""/><br/>
        <button type="submit">Login</button>
        <button onClick={() => this.nextPath('/signup')}>Signup</button>
      </div>
    );
  }
}

export default Login;
