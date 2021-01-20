import React from 'react';
import styles from './Posts.module.css';

const Posts = (props) => {
  return (
      <div className={styles.posts}>
        posts {props.text}
      </div>
  )
}

export default Posts;