import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, transactions }) => {
  const handleBalance = type => {
    const result = transactions
      .filter(transaction => transaction.type === type)
      .reduce((acc, amount) => acc + amount.amount, 0);
    return result;
  };

  return (
    <section className={styles.balance}>
      <span>&#8593; {handleBalance('deposit')}$</span>
      <span>&#8595; {handleBalance('withdraw')}$</span>
      <span>Balance: {`${balance}`}</span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Balance;
