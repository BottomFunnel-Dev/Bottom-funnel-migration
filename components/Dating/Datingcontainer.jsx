import React from 'react';
import styles from "./Datingcontainer.module.css";

export default function Datingcontainer() {
  return (
    <div className={styles.datingdiv}>
      <div className={styles.datingflexdiv}>
        <div className={styles.datingtext}>
          <div>
            <h1>Dating </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi, quis corporis voluptatem neque,
              rerum blanditiis laudantium fugiat magnam aut tenetur iure, voluptates quos alias sapiente repudiandae minus omnis. Reiciendis.
            </p>
            <button className={styles.szdatingbtn}>Get Started</button>
          </div>
        </div>
        <div className={styles.datinglogodiv}>
          <div className={styles.datinglogo}>
            <img src="Images/Dating/datingimage.png" alt='image' />
          </div>
        </div>
      </div>
    </div>
  )
}
