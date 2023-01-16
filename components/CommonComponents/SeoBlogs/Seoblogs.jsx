import React from "react";
import styles from "./Seoblogs.module.css";

export const SeoblogSection = () => {
  return (
    <div className={styles._Seoblogs12}>
      <h2>Latest Blogs</h2>
      <div className={styles._Seoblogs}>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <img src="Images/blogSection/stories1.png" alt="image" />
          </div>
          <div className={styles._Seoblogstext}>
            <p>How much does it cost to develop a mobile application</p>
            <p>The cost of developing a mobile application can vary depending on the size and scope of the project. </p>
          </div>
        </div>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <img src="Images/blogSection/stories2.png" alt="image" />
          </div>
          <div className={styles._Seoblogstext}>
            <p>How much does it cost to web development services</p>
            <p>Web development services can vary greatly in price, so it is important to do your research before making a decision.</p>
          </div>
        </div>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <img src="Images/blogSection/stories5.png" alt="image" />
          </div>
          <div className={styles._Seoblogstext}>
            <p>Grab world best digital marketers for all your marketing needs</p>
            <p>If you're looking for a reliable and affordable digital marketing team, then you should consider hiring world best digital marketers.</p>
          </div>
        </div>
        <div className={styles._Seoblogs1}>
          <div className={styles._Seoblogsimage}>
            <img src="Images/blogSection/stories4.png" alt="image" />
          </div>
          <div className={styles._Seoblogstext}>
            <p>How much does it cost for UI UX designers for any technical product.</p>
            <p>A typical fee for a UI UX designer ranges between $60 and $120 per hour, depending on the level of expertise required.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
