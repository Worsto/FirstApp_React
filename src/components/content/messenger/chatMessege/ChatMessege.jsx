import React from "react";
import styles from "./../Messenger.module.css"

const ChatMessage = (props) => {

  return (
      <li>{props.text}</li>
  )
}

export default ChatMessage;