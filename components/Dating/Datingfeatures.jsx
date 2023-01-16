import React from 'react';
import styles from "./Datingfeature.module.css";

export default function Datingfeatures() {

  return (

    <div className={styles.datingfeaturesdiv}>
      <div>
        <h1>Features</h1>
        <p>You take care of the video quality and we take care of everything else</p>
      </div>

      <div className={styles.datingfeaturessubdiv}>

        <div >
          <div className={styles.updatediv}>
            <h4>Update On Time</h4>
            <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
          </div>

          {/* 
      ////////2option///////////// */}

          <div className={styles.reminderdiv}>
            <h4>Reminders</h4>
            <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
          </div>
        </div>

        <div >

          <div className={styles.updatediv}>

            <h4>Social media Integration  </h4>

            <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
          </div>

          {/* 
      ////////2option///////////// */}

          <div className={styles.reminderdiv}>
            <h4>Push Notification</h4>
            <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
          </div>

        </div>

        <div >
          <div className={styles.updatediv}>

            <h4>Ratings</h4>

            <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
          </div>

          {/* 
      ////////2option///////////// */}

          <div className={styles.reminderdiv}>

            <h4>Live Chatting</h4>

            <p>Upload in bulk, organize content in categories , add custom filters &  upload extras. </p>
          </div>

        </div>
      </div>
    </div>

  )
}
