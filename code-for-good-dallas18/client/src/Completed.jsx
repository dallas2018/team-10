import React from 'react';
import PropTypes from 'prop-types';
import styles from './Completed.module.css';
import logo from './assets/logo.jpg';

const Completed = () => (
    <div className={styles.completed}>
      <h1 className={styles.h1}>Thanks for submitting your application for SER Services!</h1>
      <h2 className={styles.h2}>We'll be getting back to you with next steps shortly.</h2>
    </div>
);

export default Completed;
