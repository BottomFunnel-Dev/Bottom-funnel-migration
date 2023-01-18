import React from 'react'
import styles from './IonicDevelopmentExpertise.module.css';

export const IonicDevelopmentExpertise = () => {
  return (

    <>
      <div className={styles.ionicDevelopmentExpertiseMainDiv}>
        <div className={styles.ionicDevelopmentExpertiseIconContainer}>
          <div className={styles.ionicDevelopmentExpertiseIconOuterBox}>
            <div className={styles.ionicDevelopmentExpertiseContainerDiv}>
              <div className={styles.ionicDevelopmentExpertiseIcon}>
                <img src='Images/IonicAppDevelopment/icons/platform.png' alt='image'/>
              </div>
              <div className={styles.ionicDevelopmentExpertiseIconHeading}>
                <h4> Cross-Platform App Development </h4>
                <p>
                  Ionic apps are truly cross-platform: able to run as an Android, iOS, Electron, and Progressive Web App (PWA), all from a single codebase.
                </p>
              </div>
            </div>

            <div className={styles.ionicDevelopmentExpertiseContainerDiv}>
              <div className={styles.ionicDevelopmentExpertiseIcon}>
                <img src='Images/IonicAppDevelopment/icons/approved.png' alt='image'/>
              </div>
              <div className={styles.ionicDevelopmentExpertiseIconHeading}>
                <h4> Hire Developers </h4>
                <p>
                  BottomFunnel provides dedicated team of Ionic developers as an expansion to your team. Hire Ionic app developers on contract basis and leverage their expertise and skills at India,
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ionicDevelopmentExpertiseIconOuterBox}>
            <div className={styles.ionicDevelopmentExpertiseContainerDiv}>
              <div className={styles.ionicDevelopmentExpertiseIcon}>
                <img src='Images/IonicAppDevelopment/icons/app-development.png' alt='image'/>
              </div>
              <div className={styles.ionicDevelopmentExpertiseIconHeading}>
                <h4>Industry-Specific Solutions</h4>
                <p>
                  Built to be fast by default—with hardware accelerated transitions, and touch-optimized gestures.
                </p>
              </div>
            </div>

            <div className={styles.ionicDevelopmentExpertiseContainerDiv}>
              <div className={styles.ionicDevelopmentExpertiseIcon}>
                <img src='Images/IonicAppDevelopment/icons/technical-support.png' alt="image"/>
              </div>
              <div className={styles.ionicDevelopmentExpertiseIconHeading}>
                <h4> End-to-End Support and Maintenance </h4>
                <p>
                  The Ionic team regularly ships new releases, bug fixes, and is very welcoming to community pull requests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ionicDevelopmentExpertiseContent}>
          <h1 className={styles.ionicDevelopmentExpertiseContentHeading}>Ionic App Development Expertise</h1>
          <p className={styles.ionicDevelopmentExpertiseContentText}>
            Our ionic app development services include up-to date integrated seamless apps that are highly functional and combines irresistible features to suit your business.
            We help you build great ionic applications that are not just browser-based. They also penetrate IU WebView for operating systems and web view for Android. Our apps make use of low-level browsers using tools such as Cordova or PhoneGap.
            <p>
              Essentially, ionic app development enables native mobile components to have an alluring design and smooth animations. Naturally, the app has a native style that enables UI layouts and elements to work. As a top-notch Ionic app development company, MindInventory provides below mentioned app development services to clients across the globe.
            </p>
          </p>
        </div>
      </div>
    </>

  )
}
