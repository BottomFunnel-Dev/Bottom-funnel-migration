import React from "react";
import styles from "./CareerReason.module.css";

export const CareerReason = () => {
  return (
    <div className={styles.CareerReasoncontainer}>
      <span>REASON TO</span>
      <h1>
        Why Work with <span>Bottom Funnel</span>
      </h1>
      <div>
        <div className={styles.CareerReasoncontent}>
          <p>
            Bottom Funnel is a start-up company that is committed to creating an
            environment where innovation, communication, and teamwork are valued
            and fostered. We understand that our success depends on the people
            who work here, so we are committed to creating an inclusive
            environment where everyone can thrive. We think it's important for
            everyone in our organization to feel like they have an opportunity
            to grow and contribute. That's why we offer competitive salaries,
            benefits, and opportunities for growth and development. This culture
            of openness leads to great team spirit, and we're proud of how our
            employees interact with each other every day.
          </p>
          <button>Read more</button>
        </div>
        <div className={styles.CareerReasonimage}>
          <img src="Images/careerPhotos/reason.png" alt="whyBF.png" />
        </div>
      </div>
    </div>
  );
};
