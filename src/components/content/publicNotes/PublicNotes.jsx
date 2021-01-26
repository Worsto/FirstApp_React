import React from 'react';
import styles from './PublicNotes.module.css';

const PublicNotes = (props) => {
  return (
      <section className={styles.publicNotes}>
        <h2>Public Notes {props.text}</h2>
      </section>
  )
}

export default PublicNotes;