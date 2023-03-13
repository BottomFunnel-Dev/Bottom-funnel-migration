import React from "react";
import styles from "./SkillsComWhyBF.module.css";

export default function SkillsComWhyBF({ data }) {
  const { title, image, bulletPointData } = data;

  return (
    <>
      <div className={styles.skillswhymain}>
        <h1>{title}</h1>
        <div className={styles.skillswhycontent}>
          <div className={styles.skillsbulletspointsimage}>
            <img src={image} alt="big-left-image.webp" />
          </div>
          <div className={styles.skillsbulletspointsmain}>
            <div className={styles.skillsbulletspoints}>
              {bulletPointData.map((elem) => {
                return (
                  <p key={elem}>
                    <i
                      class="bi bi-hand-index-fill"
                      style={{ transform: "rotate(90deg)" }}
                    ></i>
                    {elem}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
