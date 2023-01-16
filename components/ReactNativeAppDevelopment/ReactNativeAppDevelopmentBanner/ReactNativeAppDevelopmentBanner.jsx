import React from 'react'
import styles from './ReactNativeAppDevelopmentBanner.module.css';

export const ReactNativeAppDevelopmentBanner = () => {
  return (
    <div>
      <div className={styles.ReactNativeAppDevelopmentbannermainbox}>
        <div className={styles.ReactNativeAppDevelopmentbannermainboxinnertextdiv}>
          <h1>React Native App Development Services</h1>
          <p>React Native is a popular app development platform that enables developers to create mobile apps using JavaScript. React Native is different from traditional web development because it uses stateless components, which makes the app more responsive and faster. This platform also allows for easy integration with third-party APIs, making it ideal for developing features that require access to external data or services.</p>

          <button className={styles.ReactNativeAppDevelopmentbannerbutton}>Get Started</button>
        </div>
      </div>
    </div>
  )
}
