import React from 'react';
import styles from './Calendar.module.css';

const Calendar = (props) => {
  return (
      <section className={styles.calendar}>
        <h2>Calendar {props.text}</h2>
      </section>
  )
}

export default Calendar;