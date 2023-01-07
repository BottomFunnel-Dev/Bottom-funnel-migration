import React from "react";
import styles from "./EnterpriseSupporting.module.css";

export const EnterpriseSupporting = () => {
  return (
    <div className={styles.EnterpriseSupportingContainer}>
      <div className={styles.EnterpriseSupportingImage}>
        <img src="Images/enterpriseWebPhotos/supporting.png" alt="" />
      </div>
      <div className={styles.EnterpriseSupportingContent}>
        <h1>
          Supporting <span>Tomorrow's Vision</span> of the Modern Enterprise
        </h1>
        <div className="EnterpriseSupporting-hr-line">
          <span></span>
          <div></div>
          <span></span>
        </div>
        <p>
          Enterprise and organizations are defying convention by taking their
          heritage portfolios beyond the digital frontier in order to stay ahead
          of the game. They're embracing innovations and trends by working
          methodically behind the scenes to sense new possibilities - just like
          you have done with Bottom Funnel!
        </p>
        <p>
          Bottom Funnel was founded to empower enterprises by reengineering
          technology's full life cycle with next-generation processes. We shape
          and enhance digital transformation by adopting an agile approach to
          web application development.
        </p>
        <p>
          Sometime, knowing that you are visiting a website or checking it out
          from your desktop application is not enough. You have to check if the
          website looks sleek and modern. Or maybe you want to know about its
          security, speed, and other factors which determine its user
          experience.
        </p>
        <p>
          From custom web development to eCommerce solutions, we have a wide
          range of skills and expertise that will enable us to exceed your
          expectations on every project. From our friendly team members who can
          answer any questions you might have about using WordPress or another
          CMS system, all the way through to our talented designers who can
          transform even the simplest of ideas into eye-catching online
          experiences, we have everything it takes to create a fantastic online
          presence for your business.
        </p>
      </div>
    </div>
  );
};
