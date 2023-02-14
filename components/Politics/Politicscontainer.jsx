import React from "react";
import styles from "./Politicscontainer.module.css";
import Image from "next/image";

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
             <Image
                src={"/Images/Politics/politics.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
