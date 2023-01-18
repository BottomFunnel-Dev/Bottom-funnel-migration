import React from "react";
import styles from "./UIDesignWhyBF.module.css";

export const UIDesignWhyBF = () => {
  return (
    <div className={styles.UIDesignWhyBFcontainer}>
      <h1>
        What we do at <span>Bottom Funnel</span>
      </h1>
      <p>
        Our experienced team of design strategists visualizes creative ideas and
        transforms them into the client's final design. They dig deep and design
        a visual language that users can understand.
      </p>
      <div className={styles.UIDesignWhyBFmain}>
        <div className={styles.UIDesignWhyBFimages}>
          <img src="Images/UIDesignPhotos/phone.png" alt="phone.png" />
          <img src="Images/UIDesignPhotos/macbook.png" alt="macbook.png" />
          <img src="Images/UIDesignPhotos/designing.png" alt="designing.png" />
        </div>
        <ul>
          <li>
            <span>Business discovery</span> and user research
          </li>
          <li>
            <span>Product</span> and marketing UX strategy
          </li>
          <li>
            <span>User interface</span> and visual design
          </li>
          <li>
            <span>Front-end engineering</span> and platform integration
          </li>
          <li>
            <span>Usability</span> testing and analytics
          </li>
          <li>
            <span>Design sprints</span> and prototyping
          </li>
          <li>
            <span>Customer journey</span> mapping
          </li>
          <li>
            <span>UX</span> Workshops
          </li>
        </ul>
      </div>
    </div>
  );
};
