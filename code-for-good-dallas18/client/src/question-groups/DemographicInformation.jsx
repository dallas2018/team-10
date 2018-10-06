import React, { Component } from 'react';
import InputFieldGroup from '../InputFieldGroup';
import InputSection from '../InputSection';
import PropTypes from 'prop-types';
import styles from './DemographicInformation.module.css';
import firebase from '../fire.js';

class DemographicInformation extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
  	  firstName: '',
  	  lastName: ''
  	});
  }

  render() {
    return(
      <div className={styles.inputSection}>
        <InputSection>
            <InputFieldGroup type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}>First Name</InputFieldGroup>
            <InputFieldGroup type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}>Last Name</InputFieldGroup>
        </InputSection>
      </div>
    );
  }
}

export default DemographicInformation;
