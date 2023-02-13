import Image from "next/image";
import React from "react";
import styles from "./ConsultingServices.module.css";

export const ConsultingServices = () => {
  const consultingServicesWeOffer = [
    {
      title: "Business Processes and Cost Optimization",
      body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
      image: "/Images/ItConsulting/Component 98.webp",
    },
    {
      title: "Architecture and Security",
      body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
      image: "/Images/ItConsulting/Vector-1.webp",
    },
    {
      title: "Digital Technology Integration",
      body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
      image: "/Images/ItConsulting/Group.webp",
    },
    {
      title: "Program and Project Management",
      body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
      image: "/Images/ItConsulting/Vector.webp",
    },
    {
      title: "IT Solution Consulting",
      body: `As an IT Consulting company, we have extensive experience in digitally transforming our client's businesses, giving them key insights into different industires.
            Our consultants leverage their experience to analyze your technology spending, optimize IT costs,  and enhance business processes.`,
      image: "/Images/ItConsulting/Component 99.webp",
    },
  ];

  return (
    <div className={styles.consultingServicesWeOfferParentDiv}>
      <div className={styles.consultingServicesWeOfferHeadingDiv}>
        <h1>
          CONSULTING
          <span> SERVICES </span>
          WE OFFER
        </h1>
      </div>
      <div className={styles.consultingServicesWeOffers}>
        {consultingServicesWeOffer.map(({ title, body, image }, idx) => (
          <div key={idx}>
            <div style={{ width: "100%" }}>
              <Image
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                src={image}
                alt={image}
              />
            </div>

            <div className={styles.consultingServicesWeOfferContentCardDiv}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
