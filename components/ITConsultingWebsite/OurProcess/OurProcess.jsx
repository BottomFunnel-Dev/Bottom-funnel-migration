import Image from "next/image";
import React from "react";
import styles from "./OurProcess.module.css";

export const OurProcess = () => {
  return (
    <div className={styles.ourProcessParentDiv}>
      <div className={styles.consultingOurProcessHeadingMainDiv}>
        <h1>
          Our <span> Priority </span> is to make your
          <h1> Project come true</h1>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
          eligendi voluptates? Pariatur ab nobis eaque impedit quibusdam
          perferendis vero veritatis expedita, sed est.
        </p>
      </div>
      <div className={styles.consultingOurProcessImageMainDiv}>
        <span>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "fit-content" }}
            src="/Images/ItConsulting/LampiconsImage.webp"
            alt="ItConsulting/LampiconsImage.webp"
          />
        </span>
        <div className={styles.consultingOurProcessImageContentDiv}>
          <div className={styles.consultingOurProcessImageChildDiv}>
            <h4>Analysis of the current IT state</h4>
            <p>
              Our experts start by analyzing the current state of your IT
              infrastructure. They study all the existing software solutions and
              identify problems in the workflow.
            </p>
          </div>
          <div className={styles.consultingOurProcessImageChildDiv}>
            <h4>Mapping of the IT strategy</h4>
            <p>
              The next step includes devising a roadmap and strategy that will
              help your business leverage the latest digital transformation
              technologies.
            </p>
          </div>
          <div className={styles.consultingOurProcessImageChildDiv}>
            <h4>Monitoring performance</h4>
            <p>
              During the implementation, our experts closely analyze workflows
              and track performance to discover any pain-point. Our software
              engineers then leave no stone unturned to eleminate all issues.
            </p>
          </div>
          <div className={styles.consultingOurProcessImageChildDiv}>
            <h4>Suggesting improvements</h4>
            <p>
              Our experts start by analyzing the current state of your IT
              infrastructure. They study all the existing software solutions and
              identify problems in the workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
