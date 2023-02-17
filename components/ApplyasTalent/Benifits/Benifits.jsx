import React from "react";
import styles from "./Benifits.module.css";

export default function Benifits() {
  const hiretalentbenifitsdata = [
    {
      htxt: "Remote Work",
      stxt: "We embrace the remote work cultre and offer flexibility in choosing your convenient shift time and space to maintain a proper work-life balance.",
      icon: "Images/applyastalent/Frame.webp",
    },

    {
      htxt: "International Payouts",
      stxt: "We embrace the remote work cultre and offer flexibility in choosing your convenient shift time and space to maintain a proper work-life balance.",
      icon: "Images/applyastalent/Frame-1.webp",
    },

    {
      htxt: "Global Projects",
      stxt: "We embrace the remote work cultre and offer flexibility in choosing your convenient shift time and space to maintain a proper work-life balance.",
      icon: "Images/applyastalent/Frame-2.webp",
    },

    {
      htxt: "Long-term Opportunity",
      stxt: "We embrace the remote work cultre and offer flexibility in choosing your convenient shift time and space to maintain a proper work-life balance.",
      icon: "Images/applyastalent/Frame-5.webp",
    },

    {
      htxt: "Choose Your Employer",
      stxt: "We embrace the remote work cultre and offer flexibility in choosing your convenient shift time and space to maintain a proper work-life balance.",
      icon: "Images/applyastalent/Frame-4.webp",
    },

    {
      htxt: "We'll Be There For You",
      stxt: "We embrace the remote work cultre and offer flexibility in choosing your convenient shift time and space to maintain a proper work-life balance.",
      icon: "Images/applyastalent/Frame-3.webp",
    },
  ];

  return (
    <div className={styles.applytalentbenifitsmainboxes}>
      <h1>
        Benifits at <span>Bottom Funnel</span> Talent Solution
      </h1>
      <div className={styles.applytalentbenifitsflexbox}>
        {hiretalentbenifitsdata.map((ele) => {
          return (
            <div>
              <div>
                <h4>{ele.htxt}</h4>
                <p>{ele.stxt}</p>
              </div>
              <div className={styles.hitretalentbenifitsicon}>
                <img src={ele.icon} alt="images" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
