import React, { Component } from 'react';
import fire from './fire';
import styles from './Landing.module.css';
import wallpaper from './assets/wallpaper.jpg';

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
      <div className={styles.landing}>
        <div className={styles.pictureWrapper}>
          <h1 className={styles.applyTitle}>Apply for Services</h1>
        </div>
        <div className={styles.landingContainer}>
          <div className={styles.landingWrapper}>
            <h2 className={styles.title}>Application Disclaimer</h2>
            <div>By completing the application:</div>
            <div>I certify that the information provided in this application
              and all related documents is a true and accurate representation of
              my experience and abilities. If the information I have provided is
              found to be false, my application may be cancelled, my training
              terminated, or my employment may be terminated.</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
