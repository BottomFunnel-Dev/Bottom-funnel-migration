import Image from "next/image";
import React from "react";
import styles from "./ConsultingWhyChooseUs.module.css";

export const ConsultingWhyChooseUs = () => {
  const cardsData = [
    {
      title: "Flexible Engagement",
      body: "Distinguish regions of interest for further analysis, individual objects from the background, etc.",
      image: "/Images/ItConsulting/Curved Arrow.webp",
    },
    {
      title: "Experienced and talented team",
      body: "Label or classify objects in digital images based on one or several object classes: people, vechicles, electronic components, etc.",
      image: "/Images/ItConsulting/Team.webp",
    },
    {
      title: "We are always here for you",
      body: "Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc.",
      image: "/Images/ItConsulting/support.webp",
    },
    {
      title: "Integrity and Transparency",
      body: "Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc.",
      image: "/Images/ItConsulting/Agile Iteration.webp",
    },
  ];

  return (
    <div className={styles.consultingServicesWhyChooosecontainer}>
      <h1>
        {" "}
        But, Why you should consider
        <span> Bottom Funnel </span>
        <h1>for your project</h1>
      </h1>
      <div className={styles.consultingServicesWhyChooosehrline}>
        <span></span>
        <div></div>
        <span></span>
      </div>
      <div className={styles.consultingServicesWhyChooosemain}>
        <div className={styles.consultingServicesWhyChoooseimage}>
          <Image
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            src="/Images/ItConsulting/why choose us 1.webp"
            alt="ItConsulting/why choose us 1.webp"
          />
        </div>

        <div className={styles.consultingServicesWhyChooosecards}>
          {cardsData.map(({ title, body, image }) => (
            <div key={title}>
              <div>
                <Image
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                  alt={image}
                />
              </div>

              <div
                className={styles.consultingServiceWhyChooseUsCardsContentDiv}
              >
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
