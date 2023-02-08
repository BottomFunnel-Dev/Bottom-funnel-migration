import React from "react";
import styles from "./KotlinSolutions.module.css";
import Image from "next/image";

export const KotlinSolutions = () => {
  return (
    <>
      <div className={styles.kotlinSolutionsMainDiv}>
        <div className={styles.kotlinSolutionsheading}>
          <h1> Our Kotlin App Development Solutions </h1>
          <p style={{
            textAlign:"justify"
          }}>
            We offer a wide range of services including app design, development
            and maintenance, so you can be sure your project will be handled
            with care from start to finish. We use latest techniques and tools
            to make your app look its absolute best, and we guarantee it'll be
            reliable and bug-free when it's finally released to the public. So
            come on board our train - we're leaving slow but steady!
          </p>
        </div>
        <div className={styles.kotlinSolutionsContainerDiv}>
          <div className={styles.kotlinSolutionsBox}>
            <div className={styles.kotlinSolutionsContainerBoxes}>
              <div className={styles.kotlinSolutionsBoxIcon}>
              <Image
          src={"/Images/Kotlin/Icons/platform 1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
           
                {/* <img
                  className={styles.KotlinSolutionImage}
                  src="Images/Kotlin/Icons/platform 1.png"
                /> */}
              </div>

              <div className={styles.kotlinSolutionsBoxHeading}>
                <h5>Custom Kotlin App Development</h5>
                <div className={styles.kotlinSolutionsBoxContent}>
                <p style={{
                  textAlign:"justify",
                  marginTop:"1%"
                }}>
                  We are experts in building custom-made apps for businesses.
                  With their guidance, you will be able to achieve greater
                  success and growth by creating an application that meets your
                  goals and expectations.
                </p>
                </div>
              </div>

            </div>

            <div className={styles.kotlinSolutionsContainerBoxes}>
              <div className={styles.kotlinSolutionsBoxIcon}>
              <Image
          src={"/Images/Kotlin/Icons/platform 1-1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img
                  className={styles.KotlinSolutionImage}
                  src="Images/Kotlin/Icons/platform 1-1.png"
                /> */}
              </div>

              <div className={styles.kotlinSolutionsBoxHeading}>
                <h5>Prototyping</h5>
              </div>

              <div className={styles.kotlinSolutionsBoxContent}>
                <p style={{
                  textAlign:"justify",
                  marginTop:"1%"
                }}>
                  {" "}
                  We use prototyping tools as much as possible. You see, they
                  not only save us time and money while prototyping new ideas,
                  but they also help us find bugs in our code faster and more
                  efficiently.
                </p>
              </div>

            </div>
            <div className={styles.kotlinSolutionsContainerBoxes}>
              <div className={styles.kotlinSolutionsBoxIcon}>
              <Image
          src={"/Images/Kotlin/Icons/ux-interface 2-1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img
                  className={styles.KotlinSolutionImage}
                  src="Images/Kotlin/Icons/ux-interface 2-1.png"
                /> */}
              </div>

              <div className={styles.kotlinSolutionsBoxHeading}>
                <h5>Kotlin UI/UX Development</h5>
              </div>

              <div className={styles.kotlinSolutionsBoxContent}>
                <p style={{
                  textAlign:"justify",
                  marginTop:"1%"
                }}>
                  We have got you covered with our bottom funnel kotlin app
                  development services! We have extensive experience with UI/UX
                  design, and our team is comprised of experts who understand
                  the importance of user experience.
                </p>
              </div>
            </div>

            <div className={styles.kotlinSolutionsContainerBoxes}>
              <div className={styles.kotlinSolutionsBoxIcon}>
              <Image
          src={"/Images/Kotlin/Icons/solution 2-1.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                {/* <img
                  className={styles.KotlinSolutionImage}
                  src="Images/Kotlin/Icons/solution 2-1.png"
                /> */}
              </div>

              <div className={styles.kotlinSolutionsBoxHeading}>
                <h5>Kotlin Migration Solutions</h5>
              </div>
              
              <div className={styles.kotlinSolutionsBoxContent}>
                <p style={{
                  textAlign:"justify",
                  marginTop:"1%"
                }}>
                  Make the process of switching to Kotlin smooth by using our
                  services. We offer all kind of migration solutions including
                  bottom funnel, data enhancement or changing your application's
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
