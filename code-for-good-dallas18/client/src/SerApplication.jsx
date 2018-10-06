import React, { Component } from 'react';
import InputField from './InputField.jsx';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import Dropdown from './Dropdown.jsx';
import InputDropdownGroup from './InputDropdownGroup';
import Footer from './Footer.jsx';
import styles from './SerApplication.module.css';
import firebase from './fire.js';

class SerApplication extends Component {
  constructor() {
    super();
    this.state = {
      isSubmitted: false,
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
    this.setState({
      isSubmitted: true
    });
  }

  render() {
    const isSubmitted = this.state.isSubmitted;
    const arr = ["hello", "hi"];
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <InputSection name="Demographic Information">
              <InputFieldGroup type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}>First Name</InputFieldGroup>
              <InputFieldGroup type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}>Last Name</InputFieldGroup>
            </InputSection>
            <InputSection name="Test Two">
              <InputFieldGroup type="text" name="middleName" onChange={this.handleChange} value={this.state.firstName}>First Name</InputFieldGroup>
              <InputFieldGroup type="text" name="idk" onChange={this.handleChange} value={this.state.lastName}>Last Name</InputFieldGroup>
            </InputSection>
            <InputSection name="test dropdown">
              <InputDropdownGroup options={arr}>test dropdown q</InputDropdownGroup>
              <Dropdown options={arr}/>
            </InputSection>
            {isSubmitted ? 
              <button className={styles.submittedButton}>Submitted! 🎉</button>
              :
              <button className={styles.submitButton}>Submit</button>
            }
          </form>
      </div>
    );
  }
}

export default SerApplication;
