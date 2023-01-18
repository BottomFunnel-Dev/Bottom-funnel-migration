import React from "react";
import styles from "./MobileDevMainProject.module.css";

export const MobileDevMainProject = () => {

  return (
    <>
      {/* Images/MobileDevMain/Component114.png */}
      <div className={styles.mobileDevMainProjectmainbox}>
        <div className={styles.mobileDevMainProjectBackImage}>
          <img src="/Images/MobileDevMain/Component114.png" alt="image" />
        </div>

        <div className={styles.mobileDevMainProjectmainboxinnertextdiv}>
          <h1>Kick Start Your Dream Project With Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec, eleifend eros . Sed sed efficitur lectus, sed vehicula est. Donec feugiat non ex a molestie. Nullam</p>

          <button className={styles.mobileDevMainProjectbutton}>Get Started</button>
        </div>
      </div>
    </>
  );
};
