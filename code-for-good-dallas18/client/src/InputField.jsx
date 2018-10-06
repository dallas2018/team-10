import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const InputField = ({
  value, 
  type,
  name,
  required
}) => (
    <div className={styles.inputField}>
      <input value={value} type={type} name={name} required={required} />
    </div>
);

InputField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool.isRequired
};

export default InputField;
