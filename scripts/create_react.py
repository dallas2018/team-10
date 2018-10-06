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

ret_top_top = """
  render() {
    return (
"""
ret_top_bot = """
      <div className="App">
          <form onSubmit={this.handleSubmit}>
"""
ret_bot = """
            <button>Submit</button>
          </form>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default SerApplication;

"""
ret = """
            <InputSection name="Demographic Information">
              <InputFieldGroup type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}>First Name</InputFieldGroup>
              <InputFieldGroup type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}>Last Name</InputFieldGroup>
            </InputSection>
"""

input_field_section = "            <InputSection name=\"{}\">\n"
input_field_section_end = "            </InputSection>\n"

text_question = "              <InputFieldGroup type=\"{question_type}\" name=\"{var_name}\" onChange={{this.handleChange}} value={{this.state.{var_name}}}>{ques}</InputFieldGroup>\n"

drop_question = """              <InputDropdownGroup options={{{arr_name}}}>{ques}</InputDropdownGroup>
              <Dropdown options={{{arr_name}}}/>\n"""


with open('question.json', 'r') as f:
    x = json.load(f)

state_lst = []
arr_lst = []

for section, questions in x.items():
    # print(input_field_section.format(section))
    for question_obj in questions:
        if question_obj['var_name'] != 'hello':
            '''
            print(question.format(question_type=question_obj['type'],
                ques=question_obj['question'],
                var_name=question_obj['var_name']))
            '''
            state_lst.append(question_obj['var_name'] + ': \'\',')
            if question_obj['type'] == 'dropdown' or question_obj['type'] == 'checkbox':
                answer_lst = "\", \"".join(question_obj['answer'])
                arr_lst.append("const {} = [\"{}\"]".format((question_obj['var_name'] + '_arr'),
                    answer_lst))
            # print(question_obj['question'])
            # print(question_obj['answer'])
            # print(question_obj['type'])
            # print(question_obj['var_name'])
    # print(input_field_section_end)
state_lst[-1] = state_lst[-1][0:-1]
state = ('\n'.join(state_lst))
arr = ('\n'.join(arr_lst))

f = open('output.jsx', 'w')
with open('output.jsx' ,'w') as f:
    f.write(constructor_top)
    f.write(state)
    f.write(constructor_bot)
    f.write(code)
    f.write(ret_top_top)
    f.write(arr)
    f.write(ret_top_bot)
    '''
    print(constructor_top)
    print(state)
    print(constructor_bot)
    print(code)
    print(ret_top_top)
    print(arr)
    print(ret_top_bot)
    '''
    for section, questions in x.items():
        # print(input_field_section.format(section))
        f.write(input_field_section.format(section))
        for question_obj in questions:
            if question_obj['type'] == 'dropdown' or question_obj['type'] == 'checkbox':
                arr_name = question_obj['var_name'] + '_arr'
                # print(drop_question.format(arr_name=arr_name,
                f.write(drop_question.format(arr_name=arr_name,
                ques=question_obj['question']))
            if question_obj['type'] == 'text':
                '''
                print(text_question.format(question_type=question_obj['type'],
                    ques=question_obj['question'],
                    var_name=question_obj['var_name']))
                '''

                f.write(text_question.format(question_type=question_obj['type'],
                    ques=question_obj['question'],
                    var_name=question_obj['var_name']))
                state_lst.append(question_obj['var_name'] + ': \'\',')
                # print(question_obj['question'])
                # print(question_obj['answer'])
                # print(question_obj['type'])
                # print(question_obj['var_name'])
        f.write(input_field_section_end)
    f.write(ret_bot)
