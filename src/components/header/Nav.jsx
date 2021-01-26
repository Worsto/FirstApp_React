import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><NavLink to="/profile" activeClassName={styles.active} className={styles.link}>Profile</NavLink></li>
          <li><NavLink to="/news" activeClassName={styles.active} className={styles.link}>News</NavLink></li>
          <li><NavLink to="/messenger" activeClassName={styles.active} className={styles.link}>Messenger</NavLink></li>
          <li><NavLink to="/notes" activeClassName={styles.active} className={styles.link}>Notes</NavLink></li>
          <li><NavLink to="/publicNotes" activeClassName={styles.active} className={styles.link}>Public Notes</NavLink></li>
          <li><NavLink to="/calendar" activeClassName={styles.active} className={styles.link}>Calendar</NavLink></li>
        </ul>
        <ul className={`${styles.list} ${styles.footer}`}>
          <li><NavLink to="/settings" activeClassName={styles.active} className={styles.link}>Settings</NavLink></li>
          <li><NavLink to="/otherTools" activeClassName={styles.active} className={styles.link}>Other tools</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar;