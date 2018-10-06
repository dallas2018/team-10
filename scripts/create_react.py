import json

import_statements = """
import React, { Component } from 'react';
import InputField from './InputField.jsx';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import DemographicInformation from './question-groups/DemographicInformation';
import styles from './SerApplication.module.css';
import firebase from './fire.js';
"""


constructor_top = """
class SerApplication extends Component {
  constructor() {
    super();
    this.state = {"""

state = """      firstName: '',
      lastName: ''"""

constructor_bot = """    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }"""

code = """
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

"""

ret = """
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
"""

input_field_section = "            <InputSection name=\"{}\">"
input_field_section_end = "            </InputSection>"

question = "              <InputFieldGroup type=\"{question_type}\" name=\"firstName\" onChange={{this.handleChange}} value={{this.state.firstName}}>{ques}</InputFieldGroup>"

with open('question.json', 'r') as f:
    x = json.load(f)

print(ret)
print(input_field_section)
print(x)
for section, questions in x.items():
    print(input_field_section.format(section))
    for question_obj in questions:
        print(question.format(question_type=question_obj['type'], ques=question_obj['question']))
        print(question_obj['question'])
        print(question_obj['answer'])
        print(question_obj['type'])
    print(input_field_section_end)