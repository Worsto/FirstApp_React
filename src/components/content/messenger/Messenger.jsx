import React from 'react';
import styles from './Messenger.module.css';
import ChatItem from "./chatItem/ChatItem";
import ChatMessage from "./chatMessege/ChatMessege";


const Messenger = (props) => {
  const chatsElements = props.data.chats.map( ch => <ChatItem name={ch.name} id={ch.id} />)
  const massagesElements = props.data.messages.map( me => <ChatMessage text={me.text} id={me.id} /> )

  let newMessage = React.createRef();

  const sendMessage = () => {
    let message = newMessage.current.value;
    alert(message)
  }

  return (
      <section className={styles.messenger}>
        <h2 className='visually-hidden'>Messenger</h2>
        <ul className={styles.chatsList}>
          {chatsElements}
        </ul>
        <ul className={styles.chat}>
          {massagesElements}
        </ul>
        <form action="">
          <textarea ref={newMessage}></textarea>
          <button onClick={sendMessage}>Send</button>
        </form>
      </section>
  )
}

export default Messenger;