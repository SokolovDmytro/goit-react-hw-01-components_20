import React from "react";
import styles from "./FriendsList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ items }) => (
  <ul className={styles.friendList}>
    {items.map(item => (
      <li className={styles.item} key={item.id}>
        <span
          // status={item.isOnline}
          className={item.isOnline ? styles.statusTrue : styles.statusFalse}
        ></span>
        <img className={styles.avatar} src={item.avatar} alt="" width="48" />
        <p className={styles.name}>{item.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};

export default FriendList;