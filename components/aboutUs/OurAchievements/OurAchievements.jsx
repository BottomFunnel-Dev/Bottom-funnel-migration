import React from "react";
import styles from "./OurAchievements.module.css";
import Image from "next/Image"; 

export const OurAchievements = () => {
  return (
    <div className={styles.OurAchievementsmain}>
      <div className={styles.OurAchievementscontent}>
        <h1>
          Our <span>Achievements</span>
        </h1>
        <p>
          Bottom Funnel is an IT company that goes the extra mile for its
          clients. We understand your business and deliver solutions that solve
          problems, not add more work.
        </p>
        <p>
          Our expertise in end-to-end services means you get a complete solution
          to your business needs - from fixing software glitches to providing
          training on new technologies. We partner with companies big and small,
          so we have experience working with every type of company.
        </p>
        <p>
          If you're looking for a partner who will put their customers' needs
          before their own, then look no further - Bottom Funnel is just the
          agency you've been searching for!
        </p>
        <button>Read More</button>
      </div>
      
      <div className={styles.OurAchievementsimage}>
        {/* <img src="/Images/aboutusImage/our-achievements.jpg" alt="Our Achievement" /> */}
        <Image
          src={"/Images/aboutusImage/our-achievements.webp" }
          alt={"image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
