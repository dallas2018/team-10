import React, { Component } from 'react';
import InputField from './InputField.jsx';
import fire from './fire';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    fire.database().ref("Applicant").set({question: 'name', answer: 'jmo', bob: 'bob', shui: 'shui'});
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
        <header className="App-header">
          <h1 className="App-title">SER Houston - Online Application</h1>

          <InputSection type="text" required="false">Hello</InputSection>
        </header>
        

        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
