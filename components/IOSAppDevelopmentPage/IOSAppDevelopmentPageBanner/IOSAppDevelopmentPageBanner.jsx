import React from 'react'
import styles from './IOSAppDevelopmentPageBanner.module.css';

export const IOSAppDevelopmentPageBanner = () => {
  return (
    <div>
      <div className={styles.IOSAppDevelopmentbannermainbox}>
        <div className={styles.IOSAppDevelopmentbannermainboxinnertextdiv}>
          <h1>IOS App Development Services</h1>
          <p>
            We deliver iOS apps keeping in mind both the business side and the end-users. Hire iOS software developers now.
          </p>

          <button className={styles.IOSAppDevelopmentbannerbutton}>Get Started</button>
        </div>
      </div>
    </div>
  )

}
