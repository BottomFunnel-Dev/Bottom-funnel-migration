import React from "react";
import styles from "./FluterDevelopmentExpertise.module.css";

export const FluterDevelopmentExpertise = () => {
  return (
    <>
      <div className={styles.flutterDevelopmentExpertiseMainDiv}>
        <div className={styles.flutterDevelopmentExpertiseIconContainer}>
          <div className={styles.flutterDevelopmentExpertiseIconOuterBox}>
            <div className={styles.flutterDevelopmentExpertiseContainerDiv}>
              <div className={styles.flutterDevelopmentExpertiseIcon}>
                <img src="Images/FlutterDevelopment/Icons/platform 2.png" />
              </div>

              <div className={styles.flutterDevelopmentExpertiseIconHeading}>
                <h4>Cross-Platform App Development</h4>
                <p>
                  {" "}
                  We offer everything you need to build an amazing app from
                  scratch including UI/UX design, mobile app development, and
                  cross-platform compatibility.{" "}
                </p>
              </div>
            </div>

            <div className={styles.flutterDevelopmentExpertiseContainerDiv}>
              <div className={styles.flutterDevelopmentExpertiseIcon}>
                <img src="Images/FlutterDevelopment/Icons/approved2.png" />
              </div>
              <div className={styles.flutterDevelopmentExpertiseIconHeading}>
                <h4>Hire Developers</h4>
                <p>
                  Our developers have vast experience in web application
                  development and this has helped us build large-scale
                  applications that are robust, stable, secure, and error-free.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flutterDevelopmentExpertiseIconOuterBox}>
            <div className={styles.flutterDevelopmentExpertiseContainerDiv}>
              <div className={styles.flutterDevelopmentExpertiseIcon}>
                <img src="Images/FlutterDevelopment/Icons/bulb.png" />
              </div>
              <div className={styles.flutterDevelopmentExpertiseIconHeading}>
                <h4>Industry-Specific Solutions</h4>
                <p>
                  {" "}
                  With our team's years of experience in building apps for
                  various verticals and industries, we know how to identify the
                  unique requirements of each business and translate that into
                  an app that's sure to be effective.{" "}
                </p>
              </div>
            </div>
            <div className={styles.flutterDevelopmentExpertiseContainerDiv}>
              <div className={styles.flutterDevelopmentExpertiseIcon}>
                <img src="Images/FlutterDevelopment/Icons/technical-support 2.png" />
              </div>
              <div className={styles.flutterDevelopmentExpertiseIconHeading}>
                <h4>End-to-End Support and Maintenance</h4>
                <p>
                  We offers end-to-end support and maintenance for your app. So
                  not only do they develop it for you, but also help optimise
                  its performance and user experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flutterDevelopmentExpertiseContent}>
          <h1 className={styles.flutterDevelopmentExpertiseContentHeading}>
            Flutter App Development Expertise
          </h1>
          <p className={styles.flutterDevelopmentExpertiseContentText}>
            We have a team of experts who are adept at developing applications for all types of devices. Our experience spans over years, so you can be sure that your app will run smoothly on all platforms and devices. Don't think we're just experts in Android apps! We also have expertise in Apple development as well! As a result, you can expect 100% perfection from us every time.
          </p>
        </div>
      </div>
    </>
  );
};
