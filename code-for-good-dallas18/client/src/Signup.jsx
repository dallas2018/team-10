import React, { Component } from 'react';
import fire from './fire';
import styles from './Signup.module.css';

class Signup extends Component {
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

  render() {
    return (
      <div className="login">
        <h1 className={styles.signupHeader}>Sign Up</h1>
        <span>Email</span>
        <input type="email" name="Email" value=""/>
        <span>Password</span>
        <input type="password" name="Password" value=""/>
        <button type="submit">Sign Up</button>
      </div>
    );
  }
}

export default Signup;
