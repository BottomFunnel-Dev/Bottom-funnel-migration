import Image from "next/image";
import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.servicescontainer}>
      <div>
        <h1>Services</h1>
        <p>
          You take care of the video quality and we take care of everything else
        </p>
      </div>
      <div className={styles.servicessubcontainer}>
        <div>
          <div className={styles.uploaddiv}>
            <div className={styles.uploadsubdiv}>
              <div className={styles.uploadflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    src={"/Images/Videostreaming/upload.webp"}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4>Upload & Organize</h4>
              </div>
            </div>
            <p>
              Upload and organize your files the right way to make them easy to
              find and use.
            </p>
          </div>
          <div className={styles.monetizdiv}>
            <div className={styles.monetizsubdiv}>
              <div className={styles.monetizflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    src={"/Images/Videostreaming/monetization.webp"}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4>Monetization</h4>
              </div>
            </div>
            <p>
              Monetization is the process of generating revenue from your
              content.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.uploaddiv}>
            <div className={styles.uploadsubdiv}>
              <div className={styles.uploadflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    src={"/Images/Videostreaming/stream.webp"}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4>Stream On-Demand</h4>
              </div>
            </div>
            <p>There's a new way to watch your favorite shows - on-demand.</p>
          </div>
          <div className={styles.monetizdiv}>
            <div className={styles.monetizsubdiv}>
              <div className={styles.monetizflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    src={"/Images/Videostreaming/analytics.webp"}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4>Analytics</h4>
              </div>
            </div>

            <p>
              Analytics is the process of collecting and analyzing data to
              improve business performance.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.uploaddiv}>
            <div className={styles.uploadsubdiv}>
              <div className={styles.uploadflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    src={"/Images/Videostreaming/live.webp"}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4>Streamm Live</h4>
              </div>
            </div>

            <p>
              Streamm Live is a new live streaming platform that lets you watch
              live streams of your favorite celebrities.
            </p>
          </div>
          <div className={styles.monetizdiv}>
            <div className={styles.monetizsubdiv}>
              <div className={styles.monetizflexdiv}>
                <div className={styles.uploadimg}>
                  <Image
                    src={"/Images/Videostreaming/devices.webp"}
                    alt={"Image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h4>For all devices</h4>
              </div>
            </div>

            <p>
              Make sure you are signing in to all the devices you use regularly.
              This will help keep your information safe and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
