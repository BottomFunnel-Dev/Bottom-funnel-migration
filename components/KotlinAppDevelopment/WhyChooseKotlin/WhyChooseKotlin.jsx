import React from "react";
import styles from "./WhyChooseKotlin.module.css";

export const WhyChooseKotlin = () => {
  return (
    <>
      <div className={styles.whyChooseKotlinMainDiv}>
        <div className={styles.whyChooseKotlinIconContainer}>
          <div className={styles.whyChooseKotlinIconOuterBox}>
            <div className={styles.whyChooseKotlinContainerDiv}>
              <div className={styles.whyChooseKotlinIcon}>
                <img src="Images/Kotlin/Icons/Java.png"  />
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
                <img src="Images/Kotlin/Icons/cyberSecurity.png"  />
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
                <img src="Images/Kotlin/Icons/platform-1.png" />
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
                <img src="Images/Kotlin/Icons/technical-support 2-1.png" />
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
          <p className={styles.whyChooseKotlinContentText}>
            We Offer a full range of ionic app development solutions from
            designing Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum dicta inventore a quidem ipsum recusandae voluptatem,
            similique, odit totam cupiditate perspiciatis animi ullam omnis
            deserunt sequi dignissimos soluta hic voluptatum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quibusdam nesciunt quas
            perspiciatis explicabo. Deleniti laborum adipisci dolores. Ullam ad
            nam, repellendus officia mollitia, sunt fuga, magni nemo sint
            accusantium debitis! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Debitis deserunt, expedita unde ad numquam totam
            maiores, quasi sequi iure vitae, dolorum aut amet tenetur! Id
            similique fugiat quia voluptatem nisi?
          </p>
        </div>
      </div>
    </>
  );
};
