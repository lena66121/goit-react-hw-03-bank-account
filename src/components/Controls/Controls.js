import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ value, handleClick, handleChange }) => {
  return (
    <section className={styles.controls}>
      <input type="number" value={value} onChange={handleChange} />
      <button type="button" name="deposit" onClick={handleClick}>
        Deposit
      </button>
      <button type="button" name="withdraw" onClick={handleClick}>
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Controls;
