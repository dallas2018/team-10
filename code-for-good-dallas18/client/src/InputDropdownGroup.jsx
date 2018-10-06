import React from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';
import styles from './InputFieldGroup.module.css';

const InputDropdownGroup = ({
  children,
  options
}) => (
    <div className={styles.inputFieldGroup}>
      <div className={styles.inputHeader}>
        <span className={styles.inputQuestion}>{children}</span>
      </div>
      <Dropdown options={options} />
    </div>
);

InputDropdownGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default InputDropdownGroup;
