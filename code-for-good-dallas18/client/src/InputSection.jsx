import React from 'react';
import InputFieldGroup from './InputFieldGroup';
import PropTypes from 'prop-types';
import styles from './InputSection.module.css';

const InputSection = ({
  children,
  value,
  type,
  name,
  required
}) => (
    <div className={styles.inputSection}>
      <InputFieldGroup value={value} type={type} name={name} required={required}>Test</InputFieldGroup>
    </div>
);

InputSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool.isRequired
};

export default InputSection;
