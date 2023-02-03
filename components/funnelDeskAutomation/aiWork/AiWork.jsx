import React from "react";
import styles from "./AiWork.module.css";
import Image from "next/image";

export const AiWork = () => {
  return (
    <div className={styles.aiWorkContainer}>
      <h1>Let AI do the heavy lifting</h1>
      <div>
        <div className={styles.aiWorkMain}>
          <div>
            <h2>Get rid of to-do lists</h2>
            <p>
              Automations scan through all your tickets every one hour to check
              if there's a need for an update or an alert. From following up
              with collaborators that you need inputs from, reminding you about
              pending work, to checking on customers. Freshdesk automates all
              redundant work. You can be assured that no task slips through the
              cracks.
            </p>
          </div>
          <span>
            <Image
              src={"/Images/funneldeskAutomation/aiwork.gif"}
              alt="funneldeskAutomation/aiwork.gif"
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
