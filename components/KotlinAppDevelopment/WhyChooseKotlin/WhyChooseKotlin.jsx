import React from "react";
import styles from "./WhyChooseKotlin.module.css";
import Image from "next/image";

export const WhyChooseKotlin = () => {
  return (
    <>
      <div className={styles.whyChooseKotlinMainDiv}>
        <div className={styles.whyChooseKotlinIconContainer}>
          <div className={styles.whyChooseKotlinIconOuterBox}>
            <div className={styles.whyChooseKotlinContainerDiv}>
              <div className={styles.whyChooseKotlinIcon}>
              <Image
          src={"/Images/Kotlin/Icons/Java.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.whyChooseKotlinIconHeading}>
                <h4>Simpler than Java</h4>  
                <p>
                  Kotlin was created by JetBrains and has been designed specifically with mobile development in mind. It also boasts high concurrency and reliability ratings which make it perfect for building user-friendly apps quickly and easily.
                </p>
              </div>
            </div>

            <div className={styles.whyChooseKotlinContainerDiv}>
              <div className={styles.whyChooseKotlinIcon}>
              <Image
          src={"/Images/Kotlin/Icons/cyberSecurity.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
           
              </div>
              <div className={styles.whyChooseKotlinIconHeading}>
                <h4>Safe and Secure</h4>
                <p>
                  kotlin is a secure programming language. It uses Java
                  development tools and applies the same security principles as
                  Java, such as permission checking and object security.{" "}
                </p>
              </div>
            </div>
            
          </div>
          <div className={styles.whyChooseKotlinIconOuterBox}>
            <div className={styles.whyChooseKotlinContainerDiv}>
              <div className={styles.whyChooseKotlinIcon}>
              <Image
          src={"/Images/Kotlin/Icons/platform-1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.whyChooseKotlinIconHeading}>
                <h4>Streamline development process</h4>
                <p>
                  {" "}
                  Kotlin solves challenges faced by programmers. For instance,
                  the type system helps you avoid null pointer exceptions.
                  Research academic languages tend to not have null.
                </p>
              </div>
            </div>
            <div className={styles.whyChooseKotlinContainerDiv}>
              <div className={styles.whyChooseKotlinIcon}>
              <Image
          src={"/Images/Kotlin/Icons/technical-support 2-1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
              </div>
              <div className={styles.whyChooseKotlinIconHeading}>
                <h4>Ensure Compatibility</h4>
                <p>
                  Kotlin programming language is fully compatible with Java.
                  Kotlin developers have access to all Java frameworks and
                  libraries while writing more clear and concise code.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whyChooseKotlinContent}>
          <h1 className={styles.whyChooseKotlinContentHeading}>
            Why Choose Kotlin for App Development
          </h1>
          <p style={{
            textAlign:"justify"
          }} className={styles.whyChooseKotlinContentText}>
            Kotlin is a modern, functional programming language with strong support for object-oriented and functional programming principles. Kotlin is designed to improve the developer experience by providing features found in more advanced languages like Swift, such as safety, tooling, and flexibility. It is a great choice for developing high-quality, bug-free applications that are easy to maintain and scale.
            One of the main reasons to choose Kotlin for app development is its safety features. Kotlin provides safer and clearer code thanks to its functional programming principles. It also has good support for Android development, making it a good choice for creating app 
            development projects. Finally, Kotlin is a rapidly evolving language with new features being added regularly, making it an exciting choice for developers looking to keep up with the latest trends in app development.
          </p>
          <div className={styles.mobileappactionkotlinbuttondiv}>
          <button className={styles.mobileappactionkotlinbutton}>Hire Kotlin developer</button>
          </div>
        </div>
      </div>
    </>
  );
};
