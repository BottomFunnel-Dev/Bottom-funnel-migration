import React from "react";
import styles from "./UXReviewWhyBF.module.css";

export const UXReviewWhyBF = () => {
  return (
    <div className={styles.UXReviewWhyBFcontainer}>
      <h1>
        Our UX Review <span>Framework</span>
      </h1>
      <p>
        Our experienced team of design strategists visualizes creative ideas and
        transforms them into the client's final design. They dig deep and design
        a visual language that users can understand.
      </p>
      <div>
        <hr />
        <div className={styles.UXReviewWhyBFmain}>
          <div className={styles.UXReviewWhyBFimages}>
            <img src="Images/UIDesignPhotos/phone.png" alt="phone.png" />
            <img src="Images/UIDesignPhotos/macbook.png" alt="macbook.png" />
            <img
              src="Images/UIDesignPhotos/designing.png"
              alt="designing.png"
            />
          </div>
          <ul>
            <li>
              <h3>Set objectives</h3>
              <p>
                Defining the objectives provides a clear picture of the
                stakeholders's expectation from the UX Review. We highlight
                business objectives to steer the project in the right direction
                and witness tangible results.
              </p>
            </li>
            <li>
              <h3>Study behaviour flows</h3>
              <p>
                We study user journey and behavioural patterns to ascertain the
                reason behind user dropouts.
              </p>
            </li>
            <li>
              <h3>Usability review</h3>
              <p>
                Usability is the core of a UX Review. We conduct usability
                testing to identify patterns that indicate a gap in the user's
                journey and gather invaluable insights.
              </p>
            </li>
            <li>
              <h3>Feedback</h3>
              <p>
                After analyzing every micro-interaction, we provide our clients
                a detailed feedback as to where the product is lagging. We view
                the feedback as an opportunity, not a list of problems, setting
                the scope for improvement.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
