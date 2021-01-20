import React from 'react';
import Navbar from './Nav'
import TopBar from './TopBar'
import styles from './Header.module.css';

const Header = () => {
  return (
      <header className={styles.header}>
        <TopBar/>
        <Navbar/>
      </header>
  )
}

export default Header;