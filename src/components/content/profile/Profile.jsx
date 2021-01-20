import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img className={styles.wall} src="" alt="Your profile theme image"></img>
      <div>
        profile info
      </div>
    </div>      
  )
}

export default Profile;