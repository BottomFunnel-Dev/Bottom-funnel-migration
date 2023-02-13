import React from "react";
import styles from "./carRentalFooter.module.css";

export const CarRentalFooter = () => {
  return (
    <div className={styles.CarRentalFooterContainer}>
      <div className={styles.RGcarRentalMaindivv}>
        <div className={styles.RGimageNh3combo}>
          <img src="/Images/Car-Rental-Page-Images/Vector.png" alt="images" />
          <h3>Customer Satisfaction</h3>
        </div>

        <p>
          When it comes to uploading content, take advantage of Bulk Uploading,
          organizing features, and extra file uploads!
        </p>
      </div>

      <div className={styles.RGcarRentalMaindivv}>
        <div className={styles.RGimageNh3combo}>
          <img src="/Images/Car-Rental-Page-Images/Vector-1.png" alt="images" />
          <h3>Flexibility</h3>
        </div>
        <p>
          Create a beautiful on demand video catalog that showcases your
          content.
        </p>
      </div>

      <div className={styles.RGcarRentalMaindivv}>
        <div className={styles.RGimageNh3combo}>
          <img
            src="/Images/Car-Rental-Page-Images/onTimeDelivery.png"
            alt="images"
          />
          <h3 className="abc">Delivery On Time</h3>
        </div>
        <p>
          You can either offer subscriptions or make sales through one-time
          purchases.
        </p>
      </div>

      <div className={styles.RGcarRentalMaindivv}>
        <div className={styles.RGimageNh3combo}>
          <img
            src="/Images/Car-Rental-Page-Images/Component183.png"
            alt="images"
          />
          <h3>Quality Assurance</h3>
        </div>
        <p>
          Knowing what your audience likes is essential for creating content
          that is effective.
        </p>
      </div>
    </div>
  );
};
