import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, deposit, withdraw }) => (
  <section className={styles.balance}>
    <span>&#8593; {`${deposit}$`}</span>
    <span>&#8595; {`${withdraw}$`}</span>
    <span>Balance: {`${balance}`}</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  withdraw: PropTypes.number.isRequired,
};

export default Balance;
