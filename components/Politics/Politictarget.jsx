import React from "react";
import styles from "./Politictarget.module.css";
export default function Politictarget() {
  return (
    <div className={styles.targetingdiv}>
      <div className={styles.targetingsub}>
        <div className={styles.sztargeting}>
          <div className={styles.sztargeting}>
            <div className={styles.sztargetingimage}>
              <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/target.png" />
            </div>
            <div className={styles.targetinghead}>
              {" "}
              <h2>Our team of data scientists excels in targeting</h2>
            </div>
          </div>

          {/* /////paragraph////////// */}
        </div>
        <div className={styles.targetpara}>
          <p>
            Our team is made up of skilled experts who understand how digital
            marketing works, so we'll be able us quickly identify the best
            approach for reaching each group of voters. We'll also use tools
            like Looker and Google Analytics to track how your efforts are
            paying off, enabling us to make adjustments if necessary.
          </p>
        </div>

        <div className={styles.sztargeting}>
          <div className={styles.sztargeting}>
            <div className={styles.sztargetingimage}>
              <img src="https://bottom-funnel-images.sfo3.cdn.digitaloceanspaces.com/Images/Politics/search.png" />
            </div>
            <div className={styles.targetinghead}>
              {" "}
              <h2>We are and so we understand constituents</h2>
            </div>
          </div>

          {/* /////paragraph////////// */}
        </div>
        <div className={styles.targetpara}>
          <p>
            With our comprehensive knowledge and expertise in politics, policy,
            and government contracting, we can partner with you to deliver a
            cutting-edge web application that will truly take your
            organization's voice worldwide. From legislative tracking and
            reporting, to social media presence and outreach efforts - we can
            help you elevate your organization's profile while building brand
            awareness at the same time.
          </p>
        </div>
      </div>
    </div>
  );
}
