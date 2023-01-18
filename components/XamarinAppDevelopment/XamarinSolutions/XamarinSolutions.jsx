import React from "react";
import styles from "./XamarinSolutions.module.css";

export const XamarinSolutions = () => {

  return (
    <>
      <div className={styles.xamarinSolutionsMainDiv}>
        <div className={styles.xamarinSolutionsHeading}>
          <h1>Our Xamarin Cross-Platform App Development Solutions</h1>

        </div>

        <div className={styles.xamarinSolutionsImage}>
          <img src="/Images/Xamarin/Group 340011.png" />

          <div className={styles.xamarinSolutions1}>
            <img src='Images/Xamarin/icons/solution 3.png' />
          </div>
          <div className={styles.xamarinSolutions1text}>
            <h6>Custom Xamarin App Development</h6>
          </div>
          <div className={styles.xamarinSolutions3}>
            <img src='Images/Xamarin/icons/solution 4.png' />
          </div>
          <div className={styles.xamarinSolutions3text}>
            <h6>Xamarin UI/UX Development</h6>
          </div>
          <div className={styles.xamarinSolutions2}>
            <img src='Images/Xamarin/icons/solution 6.png' />
          </div>
          <div className={styles.xamarinSolutions2text}>
            <h6>Prototype & wireframe Development</h6>
          </div>
          <div className={styles.xamarinSolutions4}>
            <img src='Images/Xamarin/icons/solution 5.png' />
          </div>
          <div className={styles.xamarinSolutions4text}>
            <h6>Xamarin Migration Solutions</h6>
          </div>
        </div>
      </div>
    </>
  );
};
