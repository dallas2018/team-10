import React, { Component } from 'react';
import InputField from './InputField.jsx';
import fire from './fire';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import styles from './SerApplication.module.css';

class SerApplication extends Component {
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
      <div className="App">
        <InputSection type="text" required="false">Hello</InputSection>
        
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default SerApplication;
