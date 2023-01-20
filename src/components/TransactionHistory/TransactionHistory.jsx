import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.head}>
      <tr>
        <th className={styles.type}>Type</th>
        <th className={styles.amount}>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.body}>
      {items.map(tran => (
        <tr className={styles.bodyItem} key={tran.id}>
          <td className={styles.type}>{tran.type}</td>
          <td className={styles.amount}>{tran.amount}</td>
          <td>{tran.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};