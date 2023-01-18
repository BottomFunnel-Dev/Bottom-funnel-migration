import React from 'react';
import styles from './KidsWearBanner.module.css';

export const KidsWearBanner = () => {
  return (
    <div>
      <div className={styles.KidsWearbannermainbox}>
        <div className={styles.KidsWearbannermainboxinnertextdiv}>
          <h1>Baby & Kids Wear App Solution</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec
            , eleifend eros . Sed sed efficitur lectus, sed vehicula est. Donec feugiat non ex a molestie. Nullam
          </p>

          <button className={styles.KidsWearbannerbutton}>Start Free Trail</button>
        </div>
      </div>
    </div>
  );
};
