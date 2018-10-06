import React, { Component } from 'react';
import fire from './fire.js';
import styles from './Signup.module.css';

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
      <div className={styles.login}>
        <h1 className={styles.signupHeader}>Login</h1>
        <div className={styles.questionWrapper}>
          <div className={styles.qBlock}>
            <span className={styles.inputQuestion}>Email</span>
            <input className={styles.input} type="email" name="Email" defaultValue=""/><br/>
          </div>
          <br/>
          <div className={styles.qBlock}>
            <span className={styles.inputQuestion}>Password</span>
            <input className={styles.input} type="password" name="Password" defaultValue=""/><br/>
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
