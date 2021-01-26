import React from 'react';
import styles from './News.module.css';

const News = (props) => {
  return (
      <section>
        <h2>News {props.text}</h2>
      </section>
  )
}

export default News;