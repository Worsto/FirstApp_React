import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
          <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
          <li><NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink></li>
          <li><a href="#s">Notes</a></li>
          <li><a href="#s">Public Notes</a></li>
          <li><a href="#s">Calendar</a></li>
        </ul>
        <ul className={`${styles.list} + ${styles.footer}`}>
          <li><a href="#s">Settings</a></li>
          <li><a href="#s">Other tools</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;