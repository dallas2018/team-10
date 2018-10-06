import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = this.props.options;
    const optionItems = options.map(option => (<option value={option}>{option}</option>));
    return(
      <div className={styles.dropdownContainer}>
        <select className={styles.dropdown}>
          {optionItems}
        </select>
      </div>
    );

  }
}

export default Dropdown;
