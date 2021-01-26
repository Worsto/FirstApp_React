import React from 'react';
import Profile from './profile/Profile'
import Posts from './posts/Posts'
import News from './news/News'
import Messenger from "./messenger/Messenger";
import Notes from "./notes/Notes";
import PublicNotes from "./publicNotes/PublicNotes";
import Calendar from "./calendar/Calendar";
import Settings from "./settings/Settings";
import OtherTools from "./otherTools/OtherTools";
import styles from './Content.module.css';
import {Route} from "react-router-dom";

const Content = (props) => {
  return (
      <main className={styles.content}>
        <Route path='/profile'>
          <Profile/>
          <Posts data={props.data.profile.posts}/>
        </Route>
        <Route path='/news' render={News}/>
        <Route path='/messenger'>
          <Messenger data={props.data.messenger}/>
        </Route>
        <Route path='/notes' render={Notes}/>
        <Route path='/publicNotes' render={PublicNotes}/>
        <Route path='/calendar' render={Calendar}/>
        <Route path='/settings' render={Settings}/>
        <Route path='/otherTools' render={OtherTools}/>

      </main>
  )
}

export default Content;