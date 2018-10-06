import React, { Component } from 'react';
import fire from './fire';
import styles from './Landing.module.css';

class Landing extends Component {
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
      <div className="landing">
        <div className="App-title-w">
          
        </div>
        <div className="App-title-b">

        </div>
      </div>
    );
  }
}

export default Landing;
