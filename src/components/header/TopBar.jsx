import React from 'react';
import logo from './logo.svg';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <a href="#s">
        <img src={logo} alt="Logo" className={styles.logo}></img>
      </a>
    </div>
  )
}

export default TopBar;