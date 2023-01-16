import React from 'react'
import styles from './XamarinDevelopmentExpertise.module.css';

export const XamarinDevelopmentExpertise = () => {
  return (

    <>
      <div className={styles.xamarinDevelopmentExpertiseMainDiv}>
        <div className={styles.xamarinDevelopmentExpertiseIconContainer}>
          <div className={styles.xamarinDevelopmentExpertiseIconOuterBox}>
            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <img src='Images/Xamarin/icons/platform 2.png' alt='image' />
              </div>
              <div className={styles.xamarinDevelopmentExpertiseIconHeading}>
                <h4>Cross-Platform App Development</h4>
                <p>We offer everything you need to build an amazing app from scratch including UI/UX design, mobile app development, and cross-platform compatibility. </p>
              </div>
            </div>

            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <img src='Images/Xamarin/icons/approved 1.png' alt='image' />
              </div>
              <div className={styles.xamarinDevelopmentExpertiseIconHeading}>
                <h4>Hire Developers</h4>
                <p> Our developers have vast experience in web application development and this has helped us build large-scale applications that are robust, stable, secure, and error-free. </p>
              </div>
            </div>

          </div>

          <div className={styles.xamarinDevelopmentExpertiseIconOuterBox}>
            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <img src='Images/Xamarin/icons/app-development (2) 1.png' alt='image' />
              </div>
              <div className={styles.xamarinDevelopmentExpertiseIconHeading}>
                <h4>Industry-Specific Solutions</h4>
                <p> With our team's years of experience in building apps for various verticals and industries, we know how to identify the unique requirements of each business and translate that into an app that's sure to be effective.</p>
              </div>
            </div>

            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <img src='Images/Xamarin/icons/technical-support 1.png' alt='image' />
              </div>
              <div className='xamarinDevelopmentExpertiseIconHeading'>
                <h4>End-to-End Support and Maintenance</h4>
                <p> We offers end-to-end support and maintenance for your app. So not only do they develop it for you, but also help optimise its performance and user experience. </p>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.xamarinDevelopmentExpertiseContent}>
          <h1 className={styles.xamarinDevelopmentExpertiseContentHeading}>Xamarin App Development Expertise</h1>
          <p className={styles.xamarinDevelopmentExpertiseContentText}>We have a team of experts who are adept at developing applications for all types of devices. Our experience spans over years, so you can be sure that your app will run smoothly on all platforms and devices. Don't think we're just experts in Android apps! We also have expertise in Apple development as well! As a result, you can expect 100% perfection from us every time.
          </p>
        </div>
      </div>
    </>

  )
}
