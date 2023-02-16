import Image from "next/image";
import React from "react";
import styles from "./EducationLearningSolutions.module.css";

export default function EducationLearningSolutions() {
  const cardsData = [
    {
      image: "/Images/Educationp/icons/ar-vr.webp",
      title: "AR/VR Based Education Apps",
      description:
        "Create a unique learning experience with AR & VR based solutions",
    },
    {
      image: "/Images/Educationp/icons/tech.webp",
      title: "On Demand E-learning App",
      description:
        "Create a unique learning experience with AR & VR based solutions",
    },
    {
      image: "/Images/Educationp/icons/ai.webp",
      title: "AI Based Education Apps",
      description:
        "Create a unique learning experience with AR & VR based solutions",
    },
    {
      image: "/Images/Educationp/icons/anaysis.webp",
      title: "E-learning Portals",
      description:
        "Create a unique learning experience with AR & VR based solutions",
    },
  ];

  return (
    <div className={styles.educationLearningSolutionsContainer}>
      <span>
        <Image
          src={"/Images/Educationp/learningSolution.webp"}
          alt={"Educationp/learningSolution.webp"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h1>E-Learning Solutions we provide</h1>
        <div>
          {cardsData.map(({ image, title, description }) => (
            <div key={title} className={styles.EducationLearningSolutionsCards}>
              <div>
                <span>
                  <Image
                    src={image}
                    alt={image}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                </span>
                <h2>{title}</h2>
              </div>
              <ul>
                <li>{description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
