import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const InputField = ({
  value,
  type,
  name,
  required,
  onChange
}) => (
    <div className={styles.inputField}>
      <input value={value} type={type} name={name} onChange={onChange} required={required} />
    </div>
);

InputField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputField;
