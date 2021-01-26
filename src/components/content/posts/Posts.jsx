import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";

const Posts = (props) => {
  let postsElements = props.data.map(el => <Post message={el.text}/>);

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    alert(text)
  }

  return (
      <section className={styles.posts}>
        <h3>Posts</h3>
        <form action="">
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Add post</button>
        </form>
        <ul className={styles.list}>
          {postsElements}
        </ul>
      </section>
  )
}

export default Posts;