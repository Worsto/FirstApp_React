import React from 'react';
import styles from './News.module.css';

const News = (props) => {
  return (
      <div>
        news {props.text}
      </div>
  )
}

export default News;