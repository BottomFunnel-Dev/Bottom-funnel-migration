import React from "react";
import styles from "./XamarinSolutions.module.css";
import Image from "next/image";

export const XamarinSolutions = () => {

  return (
    <>
      <div className={styles.xamarinSolutionsMainDiv}>
        <div className={styles.xamarinSolutionsHeading}>
          <h1>Our Xamarin Cross-Platform App Development Solutions</h1>
        </div>

        <div className={styles.xamarinSolutionsImage}>
              <Image
                  src={"/Images/Xamarin/Group 340011.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
              />
          <div className={styles.xamarinSolutions1}>
              <Image
                  src={"/Images/Xamarin/icons/solution 3.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
              />
          </div>
          <div className={styles.xamarinSolutions1text}>
            <h6>Custom Xamarin App Development</h6>
          </div>
          <div className={styles.xamarinSolutions3}>
              <Image
                src={"/Images/Xamarin/icons/solution 4.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
          <div className={styles.xamarinSolutions3text}>
            <h6>Xamarin UI/UX Development</h6>
          </div>
          <div className={styles.xamarinSolutions2}>
          <Image
                src={"/Images/Xamarin/icons/solution 6.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
          <div className={styles.xamarinSolutions2text}>
            <h6>Prototype & wireframe Development</h6>
          </div>
          <div className={styles.xamarinSolutions4}>
          <Image
                src={"/Images/Xamarin/icons/solution 5.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
          <div className={styles.xamarinSolutions4text}>
            <h6>Xamarin Migration Solutions</h6>
          </div>
        </div>
      </div>
    </>
  );
};
