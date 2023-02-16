import Image from "next/image";
import React from "react";
import styles from "./EducationOurSuite.module.css";

export default function EducationOurSuite() {
  const cardsData = [
    {
      image: "/Images/Educationp/icons/building.webp",
      title: "Corporate Training Apps",
      description:
        "Our education app development services consist of an easy-to-follow design concept for corporate learing apps. when we conbine our desings with clients' leared content, we are able to create a training module that helps the team hone their present skillset.",
    },
    {
      image: "/Images/Educationp/icons/safari.webp",
      title: "Induction and Orientation Apps",
      description:
        "Our education app development services consist of an easy-to-follow design concept for corporate learing apps. when we conbine our desings with clients' leared content, we are able to create a training module that helps the team hone their present skillset.",
    },
    {
      image: "/Images/Educationp/icons/connect.webp",
      title: "Employees Engagement Apps",
      description:
        "Our education app development services consist of an easy-to-follow design concept for corporate learing apps. when we conbine our desings with clients' leared content, we are able to create a training module that helps the team hone their present skillset.",
    },
    {
      image: "/Images/Educationp/icons/video.webp",
      title: "E2c eLearning App Development",
      description:
        "Our education app development services consist of an easy-to-follow design concept for corporate learing apps. when we conbine our desings with clients' leared content, we are able to create a training module that helps the team hone their present skillset.",
    },
    {
      image: "/Images/Educationp/icons/learning.webp",
      title: "On-demand eLearning Apps",
      description:
        "Our education app development services consist of an easy-to-follow design concept for corporate learing apps. when we conbine our desings with clients' leared content, we are able to create a training module that helps the team hone their present skillset.",
    },
    {
      image: "/Images/Educationp/icons/connect.webp",
      title: "Tuition Apps",
      description:
        "Our education app development services consist of an easy-to-follow design concept for corporate learing apps. when we conbine our desings with clients' leared content, we are able to create a training module that helps the team hone their present skillset.",
    },
  ];

  return (
    <div className={styles.EducationOurSuiteContainer}>
      <h1>Our Suite of Educational App Development Services</h1>
      <div>
        {cardsData.map(({ image, title, description }) => (
          <div key={title} className={styles.EducationOurSuiteCards}>
            <div>
              <Image
                src={image}
                alt={image}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
