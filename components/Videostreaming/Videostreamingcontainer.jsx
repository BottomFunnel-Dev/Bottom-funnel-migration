import Image from "next/image";
import React from "react";
import styles from "./streamingcontainer.module.css";

export default function Videostreamingcontainer() {
  return (
    <div className={styles.videocontainer}>
      <div className={styles.videosub}>
        <div className={styles.videoleft}>
          <div className={styles.videopara}>
            <h1>Reach more people in real time</h1>
            <p>
              Being a business owner is not an easy thing. You have to take care
              of every single aspect of your business, and that can be
              exhausting at times. We are for whose things.
            </p>
            <button className={styles.trailbtn}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            
            
            >Start Free Trail</button>

            
          </div>
        </div>
        <div className={styles.videoimages}>
          <div className={styles.videomac}>
            <Image
              src={"/Images/Videostreaming/iMac.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.videomobile}>
            <Image
              src={"/Images/Videostreaming/Homescreen.webp"}
              alt={"image"}
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.videobottomdiv}>
        <div className={styles.szbottomimages}>
          <Image
            src={"/Images/Videostreaming/tv.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.szbottomimages}>
          <Image
            src={"/Images/Videostreaming/androidtv.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.szbottomimages}>
          <Image
            src={"/Images/Videostreaming/watch.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />{" "}
        </div>
        <div className={styles.szbottomimages}>
          <Image
            src={"/Images/Videostreaming/iPhone.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />{" "}
        </div>
        <div className={styles.szbottomimages}>
          <Image
            src={"/Images/Videostreaming/android.webp"}
            alt={"image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
          />{" "}
        </div>
      </div>
    </div>
  );
}
