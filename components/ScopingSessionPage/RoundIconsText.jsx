import Image from "next/image";
import React from "react";
import styles from "./roundIconsText.module.css";

export const RoundIconsText = () => {
  const cardsData = [
    {
      title: "Getting to know you",
      description:
        "We believe in setting the right foundation. The preliminary information you share with us facilitates in streamlining the entire development process. Our aim is to understand and business requirements. Afterall we can strive to develop a finer product only if we understand your vision and brand. So we commence the session by asking you a series of questions.",
      image: "/Images/Scoping-Session/Icons/chat.webp",
    },
    {
      title: "Anayze the scope of the project",
      description:
        "By advancing the understanding of your goals and vision, we analyze the scope of work. We put years of experience and techhnical expertise to steer your project into the right direction. After thoughtful review, we descuss expectations and strive to enhance your understanding of the idea and its functionalities.",
      image: "/Images/Scoping-Session/Icons/searching.webp",
    },
    {
      title: "Sketch your business ideas into an epic",
      description:
        "Epic is an integral part of the software development process. We map your business ideas, outline the MVP and prioritize your milestones. A well organized project facilitates smooth sailing towards the end goal.",
      image: "/Images/Scoping-Session/Icons/writing.webp",
    },
    {
      title: "Document a scope of work",
      description:
        "After outlining the project scope and drafting an epic, we arrive at the end goal of this session - a (SWO) is a detailed report where wew undreline your designed project scope and a ballpark estimation of project budget and timeline.",
      image: "/Images/Scoping-Session/Icons/document.webp",
    },
  ];
  return (
    <div className={styles.RGroundIconsBoxContainer}>
      <span />
      <div className={styles.roundIconsTextTitleDiv}>
        <h1>We help shape your vision</h1>
        <p>
          we deliver the right product by asking the right question. Here's a
          glimpse into how we conduct a scoping session.
        </p>
        <p>
          Before we deploy our team and kickstart the development process, we
          would want to to communicate your requirements, goals and vision.
          After spending a considerable amount of time on your idea, we shape
          your vision by offering you insights on tech expertise, user
          experience and business know-how.
        </p>
      </div>
      <div className={styles.roundIconsTextCardsDiv}>
        {cardsData.map(({ title, description, image }) => (
          <div key={title}>
            <div className={styles.roundIconTitleDiv}>
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
            <p>{description}</p>
          </div>
        ))}
      </div>
      <span />
    </div>
  );
};
