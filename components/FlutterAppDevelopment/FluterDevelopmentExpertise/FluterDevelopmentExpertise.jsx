import React from "react";
import styles from "./FluterDevelopmentExpertise.module.css";
import Image from "next/image";

export const FluterDevelopmentExpertise = () => {
  return (
    <>
      <div className={styles.flutterDevelopmentExpertiseMainDiv}>
        <div className={styles.flutterDevelopmentExpertiseIconContainer}>
          <div className={styles.flutterDevelopmentExpertiseIconOuterBox}>
            <div className={styles.flutterDevelopmentExpertiseContainerDiv}>
              <div className={styles.flutterDevelopmentExpertiseIcon}>
              <Image
                src={"/Images/FlutterDevelopment/Icons/platform 2.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
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
              <Image
          src={"/Images/FlutterDevelopment/Icons/approved2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
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
              <Image
          src={"/Images/FlutterDevelopment/Icons/bulb.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
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
              <Image
          src={"/Images/FlutterDevelopment/Icons/technical-support 2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
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
          Flutter offers several benefits over other platforms, such as the ability to build high-performance apps with little to no code overhead and the use of Material Design 2 for a consistent user interface. This makes Flutter an ideal choice for building both small apps and large enterprise applications.

In addition to its powerful development tools, Flutter also offers advanced libraries and SDKs for various platforms, such as Android and iOS. This allows developers to quickly port their apps to different devices without having to make major changes to the underlying code.

With its easy-to-use API and rapid development pace, Flutter is a powerful tool that can help you create elegant and effective applications quickly and efficiently. With our expert team of engineers, we will help you develop your next application with Flutter in no time!  
          </p>
          <div>
            <button className={styles.FluterDevelopmentExpertisebutton}>Hire flutter Developer</button>
          </div>
        </div>
      </div>
    </>
  );
};
