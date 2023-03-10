import React from "react";
import styles from "./KotlinCards.module.css";
import Image from "next/image";

export const KotlinCards = () => {
  return (
    <>
      <div className={styles.kotlinCardsMainDiv}>
        <div className={styles.kotlinCardsContainer}>
          <div className={styles.kotlinCardsBox}>
            <div className={styles.kotlinCardSaving}>
            <div  className={styles.kotlinCardSavingImage}>
            <Image
          src={"/Images/Kotlin/Icons/cost.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
          
              
              <h5>Cost Saving</h5>
              <p>
                Bottom funnel is all about making your app development cost
                effective, and building a bottom funnel app is the perfect way
                to do that. Not only are they cheaper than other types of apps,
                but they're also less complicated to build.
              </p>
            </div>

            <div className={styles.kotlinCardSaving}>
            <div  className={styles.kotlinCardSavingImage}>
            <Image
          src={"/Images/Kotlin/Icons/experts.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
              
              <h5>Support And Maintenance</h5>
              <p>
                Our range of services includes web design, development, optimization, marketing automation and more so that you get all he what you need from us. We guarantee that our team of experienced professionals will be able to deliver a solution that exceeds your expectations!
              </p>
            </div>
            
            <div className={styles.kotlinCardSaving}>
              <div  className={styles.kotlinCardSavingImage}>
            <Image
          src={"/Images/Kotlin/Icons/tech.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
              
              <h5>Tech Consultancy</h5>
              <p>
                Bottom funnel development is a new and emerging field wherein bottom funnel app developers are the experts who know well how to build an app. They understand that they need to be patient, methodical, and above all else, accurate. The best part about these companies is that they have very good experience of building apps.
              </p>
            </div>
          </div>
          
          <div className={styles.kotlinCardsBox}>
            <div className={styles.kotlinCardSaving}>
            <div  className={styles.kotlinCardSavingImage}>
            <Image
          src={"/Images/Kotlin/Icons/accountable.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
          
              
              <h5>Accountable Kotlin Developers</h5>
              <p>
                Bottom funnel is the best way to find top quality Kotlin developers. We are a trusted source for finding the best kotlin developers in your area. Our app development experts have years of experience building world-class software, and their expertise can help you turn your idea into a reality.
              </p>
            </div>
            <div className={styles.kotlinCardSaving}>
            <div  className={styles.kotlinCardSavingImage}>
            <Image
          src={"/Images/Kotlin/Icons/devlopers.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
              
              <h5>Diligent Kotlin Developers</h5>
              <p>
                A Kotlin app development company recently released a funneling application. It is an amazing piece of software that helps people plan their goals and make them work. People usually have lots of ideas, but don't follow them. This software will help you out by making your plans into a reality.

              </p>
            </div>
            <div className={styles.kotlinCardSaving}>
            <div  className={styles.kotlinCardSavingImage}>
            <Image
          src={"/Images/Kotlin/Icons/building.webp"}
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
        </div>
              
              <h5>Culture Fitment</h5>
              <p>
                The bottom funnel app development is designed to help people who are searching for new opportunities, work environment, etc. Culture Fitment makes it easy to understand what it's like to be part of a particular organization or team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
