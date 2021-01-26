import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <img className={styles.wall} src="" alt="Your profile theme image"></img>
      <h2>
        Your Profile
      </h2>
    </section>
  )
}

export default Profile;