import React from 'react';
import styles from './../Posts.module.css';

const Post = (props) => {
  return (
      <li>{props.message}</li>
  )
}

export default Post;