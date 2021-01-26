import React from 'react';
import styles from './Messenger.module.css';
import ChatItem from "./chatItem/ChatItem";
import ChatMessage from "./chatMessege/ChatMessege";


const Messenger = (props) => {
  const chatsElements = props.data.chats.map( ch => <ChatItem name={ch.name} id={ch.id} />)
  const massagesElements = props.data.messages.map( me => <ChatMessage text={me.text} id={me.id} /> )

  return (
      <section className={styles.messenger}>
        <h2 className='visually-hidden'>Messenger</h2>
        <ul className={styles.chatsList}>
          {chatsElements}
        </ul>
        <ul className={styles.chat}>
          {massagesElements}
        </ul>
      </section>
  )
}

export default Messenger;