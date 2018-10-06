import React from 'react';
import InputFieldGroup from './InputFieldGroup';
import PropTypes from 'prop-types';
import styles from './InputSection.module.css';

const InputSection = ({
  children,
  name
}) => (
    <div className={styles.inputSection}>
      <span className={styles.inputSectionHeader}>{name}</span>
      {children}
    </div>
);

InputSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string.isRequired
};

export default InputSection;
