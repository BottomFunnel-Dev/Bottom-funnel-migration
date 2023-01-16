import React from "react";
import styles from "./getStarted.module.css";

// import img from '/Images/webdevmain/getstartedBanner.png';
// const styling = {
//    backgroundImage: `url('${img}')`,

// }

export const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.getText}>
        <p>
          Don't wait any longer! Contact bottom funnel today and let us build your next success story!
        </p>
        <button>Let's get Started</button>
      </div>
    </div>
  );
};
