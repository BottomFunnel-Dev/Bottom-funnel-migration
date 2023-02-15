import React from 'react';
import styles from "./Datingcontainer.module.css";
import Image from "next/image";

export default function Datingcontainer() {
  return (
    <div className={styles.datingdiv}>
      <div className={styles.datingflexdiv}>
        <div className={styles.datingtext}>
          <div>
            <h1>Dating </h1>
            <p>
            There's no doubt that dating apps have revolutionized the way we date and find love. But with so many different options out there, it can be hard to know which one is right for you. That's why we've created this comprehensive guide to the best dating app solutions out there.
            </p>
            <button className={styles.szdatingbtn}>Get Started</button>
          </div>
        </div>
        <div className={styles.datinglogodiv}>
          <div className={styles.datinglogo}>
                <Image
                  src="/Images/Dating/datingimage.webp"
                  alt="image"
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
          </div>
        </div>
      </div>
    </div>
  )
}
