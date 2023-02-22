import React from "react";
import styles from "./Realestatewhychoose.module.css";

export default function Realestatewhychoose() {
  const Realestatewhychoose = [
    {
      htxt: "100% Customization",
      icon: "Images/RealEstate/Icons/Rectangle 133.webp",
      stxt: "We believe in providing our customers with 100% customization so that each phone is unique and one of a kind.",
    },

    {
      htxt: "Highly Scalable",
      icon: "Images/RealEstate/Icons/Rectangle 133-2.webp",
      stxt: "We believe in providing our customers with 100% customization so that each phone is unique and one of a kind. ",
    },

    {
      htxt: "Dedicated Support",
      icon: "Images/RealEstate/Icons/Rectangle 133-1.webp",
      stxt: "Dedicated support is the type of support provided by a company or organization that is focused on a particular client or group of clients.",
    },

    {
      htxt: "Global Solution",
      icon: "Images/RealEstate/Icons/Rectangle 133-3.webp",
      stxt: "Global solution is a solution to the global problem. It's a complex issue with many contributing factors, but one thing is clear.",
    },
  ];

  return (
    <div className={styles.realestatewhychoosemainboxes}>
      <div className={styles.realestatewhychoosebottomtextbox}>
        <h1>
          Why Choose Bottom Funnel As your Real Estate App Development Company ?
        </h1>
      </div>
      <div className={styles.realestatewhychoosemapperbox}>
        {Realestatewhychoose.map((e) => {
          return (
            <div className={styles.realestatewhychooseindivisuallybox}>
              <h4>{e.htxt}</h4>
              <div className={styles.whychooserealestateicon}>
                <img src={e.icon} alt="icon" />
              </div>
              <p>{e.stxt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
