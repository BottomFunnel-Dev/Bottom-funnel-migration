import Image from "next/image";
import React from "react";
import styles from "./ConsultingQuestion.module.css";

export const ConsultingQuestion = () => {
  return (
    <div className={styles.consultingQuestionParentDiv}>
      <div className={styles.consultingQuestionBackImage}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="/Images/ItConsulting/RedOrange Background.webp"
          alt="ItConsulting/RedOrange Background.webp"
        />
      </div>
      <div className={styles.consultingQuestionContentMainDiv}>
        <div className={styles.consultingQuestionContentTextDiv}>
          <h1> Got Questions ?</h1>

          <div></div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            ratione perferendis laudantium at iste doloribus omnis. Error sint
            ducimus reiciendis quis, numquam eius rerum tempora non consectetur
            autem sequi veniam?
          </p>
        </div>
        <div className={styles.consultingQuestionContentButtonDiv}>
          <button> Contact Us </button>
        </div>
      </div>
    </div>
  );
};
