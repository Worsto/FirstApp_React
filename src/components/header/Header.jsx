import React from 'react';
import styles from './Header.module.css';
import logo from "./logo.svg";

const Header = () => {
  return (
      <header className={styles.header}>
        <a href="#s" className={styles.link}>
          <img src={logo} alt="Logo" className={styles.logo}></img>
        </a>
      </header>
  )
}

export default Header;