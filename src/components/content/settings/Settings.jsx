import React from 'react';
import styles from './Settings.module.css';

const Settings = (props) => {
  return (
      <section className={styles.settings}>
        <h2>Settings {props.text}</h2>
      </section>
  )
}

export default Settings;