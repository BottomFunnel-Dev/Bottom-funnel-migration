import React from "react";
import styles from "./FlutterCrossPlatform.module.css";
import Image from "next/image";

export const FlutterCrossPlatform = () => {

  return (
    <>
      <div className={styles.flutterCrossPlatformMainDiv}>
        <div className={styles.flutterCrossPlatformHeading}>
          Flutter as the Best Framework for Cross-Platform App Development
        </div>
        <div className={styles.flutterCrossPlatformtext}>
          Flutter is a mobile app development framework that allows developers to create high-quality native apps for all major platforms in just few seconds. Flutter's intuitive development tools and the possibility of working with both Android and iOS makes it an ideal choice for cross-platform app creation.

          With Flutter, you can create natively-looking apps for both Android and iOS devices quickly and efficiently, without having to worry about compatibility or platform issues.

        </div>
        <div className={styles.flutterCrossPlatformCardBoxDiv}>
          <div className={styles.flutterCrossPlatformCardBox}>
            <div className={styles.flutterCrossPlatformDataBoxes}>
              <div className={styles.flutterCrossPlatformDataIcon}>
              <Image
          src={"/Images/FlutterDevelopment/Icons/lightbulb.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.flutterCrossPlatformDataContent}>
                <p>
                  <b>Flutter Apps</b> are built out of single code base, compiled directly make use of GPU and access platform API and services.
                </p>
              </div>
            </div>

            <div className={styles.flutterCrossPlatformDataBoxes}>
              <div className={styles.flutterCrossPlatformDataIcon}>
              <Image
          src={"/Images/FlutterDevelopment/Icons/best-employee.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.flutterCrossPlatformDataContent}>
                <p>
                  <b>Flutter</b> also established a primary method of creating applications for Google Fuschia.
                </p>
              </div>
            </div>

            <div className={styles.flutterCrossPlatformDataBoxes}>
              <div className={styles.flutterCrossPlatformDataIcon}>
              <Image
          src={"/Images/FlutterDevelopment/Icons/security.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.flutterCrossPlatformDataContent}>
                <p>
                  <b>Data Share</b> similiar features like many modern langusge like kotlin and swift and can ve transcompiled into javaScript code.
                </p>
              </div>
            </div>

          </div>

          <div className={styles.flutterCrossPlatformCardBox1}>
            <div className={styles.flutterCrossPlatformDataBoxes}>
              <div className={styles.flutterCrossPlatformDataIcon}>
              <Image
          src={"/Images/FlutterDevelopment/Icons/agile-team.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.flutterCrossPlatformDataContent}>
                <p>
                  <b>It make use</b> of compiled programming language called Dart which compiles ahead of time into the native code for multiple platforms.
                </p>
              </div>
            </div>

            <div className={styles.flutterCrossPlatformDataBoxes}>
              <div className={styles.flutterCrossPlatformDataIcon}>
              <Image
          src={"/Images/FlutterDevelopment/Icons/platform 2.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.flutterCrossPlatformDataContent}>
                <p>
                  <b>Flutter</b> (Google's SDK) resembles the react native cross platform framework closely allowing for a reactive and declarative style of programming.
                </p>
              </div>
            </div>

            <div className={styles.flutterCrossPlatformDataBoxes}>
              <div className={styles.flutterCrossPlatformDataIcon}>
              <Image
          src={"/Images/FlutterDevelopment/Icons/worldwide-1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.flutterCrossPlatformDataContent}>
                <p>
                  <b>Data Archieves</b> this by using ahead of time or AOT compilation and Just-In-Time or JIT Compilation.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
