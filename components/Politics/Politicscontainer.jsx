import React from "react";
import styles from "./Politicscontainer.module.css";

export default function Politicscontainer() {
  return (
    <div className={styles.politicscontainer}>
      <div className={styles.politicssub}>
        <div className={styles.politicsleft}>
          <div className={styles.politicsleftsometextbox}>
            <h1> Politics</h1>
            <p>
              In today's world, your political stand and opinion matters a lot.
              You want to express yourself freely and loud, but do you know how
              important that is? If not, we have the perfect solution for you -
              it's called a web app!
            </p>
            <button className={styles.politicsgetbtn}>Get Started</button>
          </div>
        </div>
        <div className={styles.politicsright}>
          <div className={styles.politicsimage}>
            <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/politics.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
