import React from 'react';
import styles from './telecommunicationsHeader.module.css';

export const TelecommunicationsHeader = () => {
  return (
    <div className={styles.telecommunicationsHeaderContainerMain}>
      <div className={styles.telecommunicationsHeaderLeftDiv}>
        <div className={styles.telecommunicationsHeaderTitle}>
          <h1>Custom Telecommunication Software Development</h1>
          <p>Telecommunication software  is used to organize and manage all aspects  of electronic data {"(text, voice, video etc.)"} exchange. A software development partner of T-Mobile, Orange, and Vibe with 17 years in telecom software development, ScienceSoft builds OSS, BSS, customised VoIP/IPTV software etc.</p>
          <button>Get Started</button>
        </div>
      </div>

      <div className={styles.telecommunicationsHeaderRightDivForImg}>
        <div className={styles.telecommunicationsHeaderRightImg}>
          <img src="/Images/Telecommunication/Background/Frame1.png" alt="images" />
        </div>
      </div>
    </div>
  )
}
