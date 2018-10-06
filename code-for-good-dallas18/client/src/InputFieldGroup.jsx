import React from 'react';
import InputField from './InputField';
import PropTypes from 'prop-types';
import styles from './InputFieldGroup.module.css';

const InputFieldGroup = ({
  children,
  value,
  type,
  name,
  onChange,
  required
}) => (
    <div className={styles.inputFieldGroup}>
      <div className={styles.inputHeader}>
        <span className={styles.inputQuestion}>{children}</span>
      </div>
      <InputField value={value} type={type} name={name} onChange={onChange} required={required} />
    </div>
);

InputFieldGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
};

export default InputFieldGroup;
