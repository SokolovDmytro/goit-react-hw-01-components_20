import React from "react";
import styles from "./Transaction.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transHistory }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.titleMain}>
      <tr className={styles.titleItem}>
        <th className={styles.titleLink}>Type</th>
        <th className={styles.titleLink}>Amount</th>
        <th className={styles.titleLink}>Currency</th>
      </tr>
    </thead>

    {transHistory.map(trans => (
      <tbody className={styles.mainInfo} key={trans.id}>
        <tr className={styles.subTitleItem} >
          <td className={styles.subTitleLink}>{trans.type}</td>
          <td className={styles.subTitleLink}>{trans.amount}</td>
          <td className={styles.subTitleLink}>{trans.currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  transHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
};

export default TransactionHistory;