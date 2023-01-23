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
            <button className={styles.trailbtn}>Start Free Trail</button>
          </div>
        </div>
        <div className={styles.videoimages}>
          <div className={styles.videomac}>
            <img src="/Images/Videostreaming/iMac.png" alt="image" />
          </div>
          <div className={styles.videomobile}>
            <img src="/Images/Videostreaming/Homescreen.png" alt="image" />
          </div>
        </div>
      </div>
      <div className={styles.videobottomdiv}>
        <div className={styles.szbottomimages}>
          <img src="/Images/Videostreaming/tv.png" alt="image" />
        </div>
        <div className={styles.szbottomimages}>
          <img src="/Images/Videostreaming/androidtv.png" alt="image" />
        </div>
        <div className={styles.szbottomimages}>
          <img src="/Images/Videostreaming/watch.png" alt="image" />{" "}
        </div>
        <div className={styles.szbottomimages}>
          <img src="/Images/Videostreaming/iPhone.png" alt="image" />{" "}
        </div>
        <div className={styles.szbottomimages}>
          <img src="/Images/Videostreaming/android.png" alt="image" />{" "}
        </div>
      </div>
    </div>
  );
}
