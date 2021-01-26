import React from 'react';
import styles from './Notes.module.css';

const Notes = (props) => {
  return (
      <section className={styles.notes}>
        <h2>Notes {props.text}</h2>
      </section>
  )
}

export default Notes;