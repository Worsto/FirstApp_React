import React from 'react';
import Profile from './profile/Profile'
import Posts from './posts/Posts'
import News from './news/News'
import styles from './Content.module.css';
import {Route} from "react-router-dom";

const Content = () => {
  return (
      <main className={styles.content}>
        <Route path='/profile' component={Profile}>
          <Profile/>
          <Posts text='Текст на русском'/>
        </Route>
        <Route path='/news' component={News}/>
      </main>
  )
}

export default Content;