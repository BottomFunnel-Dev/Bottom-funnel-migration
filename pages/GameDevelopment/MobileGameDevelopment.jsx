import React from 'react';
import styles from "./MobileGameDevelopment.module.css";

export const MobileGameDevelopment = () => {
  return (
    <div className={styles.mobilegamedevelopmentmainbox}>

      <div className={styles.mobiledevelopmentflexboxingleft}>
        <div className={styles.mobiledevelopmentflexingimageonebox}>
          <img src='images/gamedevelopmentpage/Rectangle 18507.png' alt='image1' />
        </div>

        <div className={styles.mobiledevelopmentflexingimagetwobox}>
          <img src='images/gamedevelopmentpage/Rectangle 18508.png' alt='image1' />
        </div>

      </div>

      <div className={styles.mobiledevelopmentflexboxrightgamedevelopment}>

        <h2>
          <a className={styles.specialcolorredish}>Mobile</a>
          Game Development
        </h2>

        <p>
          Mobile game development is a growing field that is full of opportunity. With the ubiquity of smartphones and tablets,
          there's never been a better time to create games that can be enjoyed on-the-go. And with so many different mobile platforms
          to choose from, there's sure to be something for everyone.
        </p>


        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />

          </svg>

          <h6>Open World</h6>

        </div>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />

          </svg>

          <h6>Strategy</h6>

        </div>


        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />

          </svg>

          <h6>Racing</h6>

        </div>

        <div className={styles.flexinggamermetaverce}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#3db3a2" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />

          </svg>

          <h6>Online Game</h6>

        </div>

      </div>

    </div>
  )
}

