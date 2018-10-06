import React, { Component } from 'react';
import InputField from './InputField.jsx';
import fire, {db} from './fire';
import InputFieldGroup from './InputFieldGroup.jsx';
import InputSection from './InputSection.jsx';
import SerApplication from './SerApplication.jsx';
import Landing from './Landing.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.jpg';

class App extends Component {
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
        <header className="appHeader">
          <div className="logoWrapper">
            <img className="logo" href="https://serhouston.org" src={logo} alt="logo" />
          </div>
          <h1 className="App-title">SER Houston - Application</h1>
        </header>
        <div className="container">
          <Router>
            <div>
              <Route exact path="/" component={Landing}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/app" component={SerApplication}/>
            </div>
          </Router>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
