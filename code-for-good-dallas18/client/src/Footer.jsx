import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__text}>
        <p>
          Made with <span className={styles.footer__heart}>&hearts;</span> by SER Houston
          <br/><span className={styles.footer__copyright}>&copy; SER Houston 2018</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
