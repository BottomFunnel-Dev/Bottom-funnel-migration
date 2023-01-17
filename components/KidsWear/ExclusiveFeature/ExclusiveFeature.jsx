import React from 'react';
import styles from './ExclusiveFeature.module.css';

export const ExclusiveFeature = () => {
  return (
    <div className={styles.exclusiveFeatureMaindiv}>
      <h1>
        <span style={{ color: "orangered" }}>Exclusive</span>
        Features
      </h1>

      <div className={styles.exclusiveFeatureInnermaindiv}>
        <div className={styles.exclusiveFeatureInnerdivcontain}>
          <h2>Store Locator</h2>
          <p>
            Now, your coustomers can locate you from any place on the globe. this feature helps redirect traffic from web to store and vise versa.
          </p>
        </div>

        <div className={styles.exclusiveFeatureInnerdivcontain1}>
          <h2>Loyalty Programs</h2>
          <p>
            Now, your coustomers can locate you from any place on the globe. this feature helps redirect traffic from web to store and vise versa.
          </p>
        </div>

        <div className={styles.exclusiveFeatureInnerdivcontain}>
          <h2>Varied Payment Gateways</h2>
          <p>
            Now, your coustomers can locate you from any place on the globe. this feature helps redirect traffic from web to store and vise versa.
          </p>
        </div>
      </div>

      <div className={styles.exclusiveFeatureInnermaindiv}>
        <div className={styles.exclusiveFeatureInnerdivcontain1}>
          <h2>Click and Collect Option </h2>
          <p>
            Now, your coustomers can locate you from any place on the globe. this feature helps redirect traffic from web to store and vise versa.
          </p>
        </div>

        <div className={styles.exclusiveFeatureInnerdivcontain}>
          <h2>Click to Call</h2>
          <p>
            Now, your coustomers can locate you from any place on the globe. this feature helps redirect traffic from web to store and vise versa.
          </p>
        </div>

        <div className={styles.exclusiveFeatureInnerdivcontain1}>
          <h2>Easy Zoom in and Out</h2>
          <p>
            Now, your coustomers can locate you from any place on the globe. this feature helps redirect traffic from web to store and vise versa.
          </p>
        </div>

      </div>
    </div>
  );
};
