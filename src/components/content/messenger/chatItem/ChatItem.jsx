import React from "react";
import {NavLink} from "react-router-dom";
import styles from './../Messenger.module.css';


const ChatItem = (props) => {

  return (
      <li className={styles.chatItem}>
        <NavLink to={`/messenger/chat${props.id}`}>
          {props.name}
        </NavLink>
      </li>
  )
}

export default ChatItem;