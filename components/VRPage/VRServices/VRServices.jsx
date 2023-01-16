import React from "react";
import styles from "./VRServices.module.css";

export const VRServices = () => {
  const cardsData = [
    {
      title: "Business Consulting",
      body: [
        "Gather and analyze your needs.",
        "Formulate technical requirements and features.",
        "Help you choose VR equipment with your budget in mind.",
      ],
      image: "Images/VRPhotos/consulting.png",
    },
    {
      title: "VR software development",
      body: [
        "Making use of motion/eye tracking and computer vision technologies.",
        "Introducing intuitive interactivity and realistic sound acoustics.",
        "Optimizing backends for high-load VR processes.",
      ],
      image: "Images/VRPhotos/development.png",
    },
    {
      title: "3D modeling",
      body: [
        "Highly realistic visuals.",
        "Kinesthetic attributes.",
        "Engaging animations.",
      ],
      image: "Images/VRPhotos/modeling.png",
    },
    {
      title: "VR software integration",
      body: ["CMS.", "LMS.", "EHR.", "CRM."],
      image: "Images/VRPhotos/integration.png",
    },
  ];

  return (
    <div className={styles.VRServicesMain}>
      <h1>Virtual Reality Development Services</h1>
      <div className={styles.VRServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        reiciendis veniam magni soluta nam ab omnis possimus odit dolore
        officiis adipisci, ratione iusto iste inventore quia animi iure. Eos,
        earum!
      </p>
      <div className={styles.VRServicesContent}>
        {cardsData.map(({ title, body, image }) => {
          return (
            <div key={title}>
              <div className={styles.VRServicesCardsContent}>
                <h2>{title}</h2>
                <ul>
                  {body.map((list) => {
                    return <li>{list}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.VRServicesCardsImages}>
                <img src={image} alt={title} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.VRServicesButton}>
        <h3>Talk with our experts in Big Data to get started</h3>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-exclamation"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1.5a.5.5 0 0 1-1 0V11a.5.5 0 0 1 1 0Zm0 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
