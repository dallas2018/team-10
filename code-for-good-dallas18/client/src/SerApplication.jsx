import React, { Component } from 'react';
import InputField from './InputField.jsx';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import DemographicInformation from './question-groups/DemographicInformation';
import styles from './SerApplication.module.css';
import firebase from './fire.js';

class SerApplication extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
		e.preventDefault();
  	const itemsRef = firebase.database().ref('users');
  	const item = {
  	  firstName: this.state.firstName,
  	  lastName: this.state.lastName
  	}
  	itemsRef.push(item);
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <InputSection name="Demographic Information">
              <InputFieldGroup type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}>First Name</InputFieldGroup>
              <InputFieldGroup type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}>Last Name</InputFieldGroup>
            </InputSection>
            <button>Submit</button>
          </form>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default SerApplication;
