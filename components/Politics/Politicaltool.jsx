import React from "react";
import styles from "./Politicaltool.module.css";
import Image from "next/image";

export default function Politicaltool() {
  return (
    <div className={styles.szpoliticaltool}>
      <div className={styles.szpolicstoolhead}>
        <h1>
          Tools & frameworks that we use to make your Political app engaging
        </h1>
      </div>
      <div className={styles.szpoliticaltoolsub}>
        <div className={styles.szpoliticaltoolpara}>
          <p>
            You want to build a political app that attracts users, but you're
            not sure where to start. We've got everything you need to get
            started with web development, marketing, and analytics. Tools like
            Bootstrap make it easy to create beautiful layouts and responsive
            interfaces. And our skilled team of developers can help you build
            your app with the features you want. Don't let your competitors
            steal your chance to lead! Order our web app development tool today
            and ditch those complicated frameworks for good!
          </p>
        </div>
        <div className={styles.szpoliticalimagesdiv}>
          <div>
            <div className={styles.crossimg}>
              <Image
                src={"/Images/Politics/cross.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p>Cross-plateform solution</p>
          </div>

          <div>
            <div className={styles.crossimg}>
              <Image
                  src={"/Images/Politics/blockchain.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <p>Blockchain</p>
          </div>

          <div>
            <div className={styles.crossimg}>
               <Image
                  src={"/Images/Politics/IoT.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <p>IoT</p>
          </div>

          <div>
            <div className={styles.crossimg}>
               <Image
                  src={"/Images/Politics/artificial-intelligence.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
            <p>Arificial Intelligence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
