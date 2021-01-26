import React from 'react';
import styles from './OtherTools.module.css';

const OtherTools = (props) => {
  return (
      <section className={styles.otherTools}>
        <h2>Other Tools {props.text}</h2>
      </section>
  )
}

export default OtherTools;