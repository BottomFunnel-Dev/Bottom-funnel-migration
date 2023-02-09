import Image from "next/image";
import React from "react";
import styles from "./GameWhyChoose.module.css";

export const GameWhyChoose = () => {
  return (
    <div className={styles.gamewhychoosemainbox}>
      <div className={styles.whychoosegameflexingleftboxing}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/gamedevelopmentpage/Mask group.webp"
          alt="gamedevelopmentpage/Mask group.web"
        />

        <div className={styles.positionabsoulteboxinnerwhychoose1}>
          <div className={styles.positionabsoulteboxinnerwhychoose1logo}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/gamedevelopmentpage/Agile Iteration.webp"
              alt="gamedevelopmentpage/Agile Iteration.web"
            />
          </div>
          <h4 className={styles.colorwhite}>Agile</h4>
        </div>

        <div className={styles.positionabsoulteboxinnerwhychoose2}>
          <div className={styles.positionabsoulteboxinnerwhychoose2logo}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/gamedevelopmentpage/Vector.webp"
              alt="gamedevelopmentpage/Vector.webp"
            />
          </div>
          <h4 className={styles.colorwhite}>Customer Satisfaction</h4>
        </div>

        <div className={styles.positionabsoulteboxinnerwhychoose3}>
          <div className={styles.positionabsoulteboxinnerwhychoose3logo}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/gamedevelopmentpage/Team.webp"
              alt="gamedevelopmentpage/Team.webp"
            />
          </div>
          <h4 className={styles.colorwhite}>Experience and Talanted Team</h4>
        </div>

        <div className={styles.positionabsoulteboxinnerwhychoose4}>
          <div className={styles.positionabsoulteboxinnerwhychoose4logo}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/gamedevelopmentpage/Curved Arrow.webp"
              alt="gamedevelopmentpage/Curved Arrow.web"
            />
          </div>
          <h4 className={styles.colorwhite}>Flexible Engagement</h4>
        </div>

        <div className={styles.positionabsoulteboxinnerwhychoose5}>
          <div className={styles.positionabsoulteboxinnerwhychoose5logo}>
            <Image
              width={"0"}
              height={"0"}
              sizes={"100vw"}
              style={{ width: "100%", height: "100%" }}
              src="/Images/gamedevelopmentpage/support.webp"
              alt="gamedevelopmentpage/support.webp"
            />
          </div>
          <h4 className={styles.colorwhite}>We are always here for you</h4>
        </div>
      </div>

      <div className={styles.whychoosegamingflexboxrightdiv}>
        <h2>
          Why you Should consider
          <a className={styles.colorred}>Bottom Funnel</a>
          For Game Development
        </h2>

        <p>
          Bottom Funnel is a strategy that can be used to maximize the success
          of your game development initiatives. It works by breaking down the
          entire game development process into small, achievable goals, and then
          tracking progress along the way. This system helps you stay focused
          and motivated while making significant progress toward your ultimate
          goal.
        </p>
      </div>
    </div>
  );
};
