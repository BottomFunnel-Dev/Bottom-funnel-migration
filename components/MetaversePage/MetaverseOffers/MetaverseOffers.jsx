import React from "react";
import styles from "./MetaverseOffers.module.css";
import Image from "next/image";

export const MetaverseOffers = () => {
  const cardsData = [
    {
      title: "Decentralized Platforms",
      body: "Bottom Funnel is the one-stop solution for all your gaming, social, and trading needs. With our UI/UX design, frontend and backend programming, smart contracts, Oracle implementation and everything in between, we prove decentralized platforms for gaming, socializing, and trading based on the needs of your project. We understand that creating a successful dApp requires a lot more than just coding.",
      image: "/Images/metaversePhotos/decentralized.webp",
    },
    {
      title: "Metaverse Applications",
      body: "Bottom Funnel Technologies is a venture of the blockchain community dedicated to bringing user-friendly apps with blockchain-specific qualities. From automation privacy, transparency, and user sovereignty, to premium interfaces for users to experience their Metaverse, we're committed to creating the next generation of applications that make using blockchain easy and intuitive.",
      image: "/Images/metaversePhotos/virtual-reality.webp",
    },
    {
      title: "3D Spaces",
      body: "Metaverse is a great idea, but it's hard to build one that works for everyone. That's why we're breaking new ground in the world of virtual reality by providing scalable 3D space design and development services. Through Metaverse projects, you can extend your use-cases through new concepts, and our offering includes 3D visualization, 3D modeling, and interoperability.",
      image: "/Images/metaversePhotos/space.webp",
    },
    {
      title: "Integration Services",
      body: "We understand that the Metaverse is a long-term project; something that will take time, patience and understanding to grasp. That's why Bottom Funnel offers scalable 3D space design and development services. Our team can help you extend the use-cases of your Metaverse project through new concepts. We offer services such as 3D modeling, and interoperability.",
      image: "/Images/metaversePhotos/collaboration.webp",
    },
  ];

  return (
      <div className={styles.MetaverseOffersContainer}>
      <h1>Solutions We Offers</h1>
      <div className={styles.MetaverseServicesHrLine}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <p>
        Bottom Funnel is a metaverse offering that will help your business adapt
        to emerging market trends by creating a virtual reality of their
        operations.
      </p>
      <div className={styles.MetaverseOffersMain}>
        {cardsData.map(({ title, body, image }) => (
          <div>
            <div className={styles.MetaverseOffersContent}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <div className={styles.MetaverseOffersImage}>
            <Image
                  src={image}
                  alt={title}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.MetaverseOffersButton}>
        <h3>Talk with our experts in Metaverse to get started</h3>
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
