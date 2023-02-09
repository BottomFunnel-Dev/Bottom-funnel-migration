import React from "react";
import styles from "./middleText.module.css";

export const MiddleText = () => {
  return (
    <div className={styles.RGcontainer}>
      <h1 className={styles.RGhead}>
        <span className={styles.RGspanTextScoping}>Let's articulate</span> your
        project idea into a well defined scope of work
      </h1>
      <p className={styles.RGpara}>
        A scoping session is the initial interaction between you and your tech
        team.
      </p>
      <p className={styles.RGpara}>
        We believe communication is key in order to turn a path-braking idea
        into a functionally desigined product. Here's why a scoping session is a
        good starting point.
      </p>
    </div>
  );
};
