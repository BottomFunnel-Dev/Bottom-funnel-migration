import React from 'react'
import styles from './XamarinDevelopmentExpertise.module.css';
import Image from 'next/image';
import { PopupForm } from '../../PopupForm/PopupForm';

export const XamarinDevelopmentExpertise = () => {
  return (

    <>
      <div className={styles.xamarinDevelopmentExpertiseMainDiv}>
        <div className={styles.xamarinDevelopmentExpertiseIconContainer}>
          <div className={styles.xamarinDevelopmentExpertiseIconOuterBox}>
            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <Image
                      src={"/Images/Xamarin/icons/platform 2.webp"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div className={styles.xamarinDevelopmentExpertiseIconHeading}>
                <h4>Cross-Platform App Development</h4>
                <p>We offer everything you need to build an amazing app from scratch including UI/UX design, mobile app development, and cross-platform compatibility. </p>
              </div>
            </div>

            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <Image
                      src={"/Images/Xamarin/icons/approved 1.webp"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                  />
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
                <Image
                      src={"/Images/Xamarin/icons/app-development (2) 1.webp"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div className={styles.xamarinDevelopmentExpertiseIconHeading}>
                <h4>Industry-Specific Solutions</h4>
                <p> With our team's years of experience in building apps for various verticals and industries, we know how to identify the unique requirements of each business and translate that into an app that's sure to be effective.</p>
              </div>
            </div>

           
            <div className={styles.xamarinDevelopmentExpertiseContainerDiv}>
              <div className={styles.xamarinDevelopmentExpertiseIcon}>
                <Image
                      src={"/Images/Xamarin/icons/technical-support 1.webp"}
                      alt={"image"}
                      width={"0"}
                      height={"0"}
                      sizes={"100vw"}
                      style={{ width: "100%", height: "100%" }}
                  />
              </div>
              <div className={styles.xamarinDevelopmentExpertiseIconHeading}>
                <h4>End-to-End Support and Maintenance</h4>
                <p> We offers end-to-end support and maintenance for your app. So not only do they develop it for you, but also help optimise its performance and user experience. </p>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.xamarinDevelopmentExpertiseContent}>
          <h1 className={styles.xamarinDevelopmentExpertiseContentHeading}>Xamarin App Development Expertise</h1>
          <p className={styles.xamarinDevelopmentExpertiseContentText}>
          Xamarin is a leading platform for developing mobile apps for iOS, Android, and other platforms. This expert Xamarin app development service offers a range of services to help you create high-quality apps with speed and efficiency. Our team of experts can help you build engaging mobile applications using Xamarin's powerful cross-platform tools and code base. We provide training and support to ensure that you learn the best techniques for building your app. As an Xamarin app development expert, we can also assist you with any technical issues or concerns you may have. So why not give us a try? Contact us today!
          </p>
          <button className={styles.xamarinDevelopmentExpertiseContentbutton}
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          >Hire Xamarin App Developer</button>

<div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div>
                <PopupForm />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>

  )
}
