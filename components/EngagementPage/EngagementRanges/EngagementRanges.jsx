import React from "react";
import styles from "./EngagementRanges.module.css";
import { BackgroundHeading } from "../BackgroundHeading/BackgroundHeading";
import Image from "next/image";

export const EngagementRanges = () => {
  const cardsData = [
    {
      title: "FULL-TIME HIRE",
      body: "One of the most popular options under our Hire a Developer model. Most clients perfer this option as it employs direct and clear communication with the person working on the project and to provide them full control over the development process. You can hire expertx in web development, web desinging, mobile app development and SEO throughout the duration of your project development.",
      icons: "/Images/engagementPhotos/light.webp",
    },
    {
      title: "PART-TIME HIRE",
      body: "As the name implies, in part-time hiring model, we provide you with an expert who will work for a minimum of 80 hours monthly towards your project, expoyed for 5 days/week.",
      icons: "/Images/engagementPhotos/stopwatch.webp",
    },
    {
      title: "HOURLY HIRE",
      body: "For small projects and to cater to small business needs, we have yet another model that works on an hourly basis. You can hire our expert based on the number of working hours. The hiring period is minimum 25 hours, which can be further extended to a decent number of hours as per development requirements and busniess process.",
      icons: "/Images/engagementPhotos/clock.webp",
    },
  ];

  return (
    <div className={styles.engagementRangesContainer}>
      <h1>
        You are free to make a choice - choose from our range of{" "}
        <span>Models</span> that suits you best
      </h1>

      <BackgroundHeading text={"Hire a Developer Model"} />

      <p>
        As an experienced Information Technololgy solutions provider, we
        understand your concerns towards having a managerial control over the
        devellopmnet process. So, we present to you our 'Hire a Developer' Model
        that lets you hire dedicated web developers, web designers, mobile
        application developers and SEO experts. This model furtehr provides 3
        option that highlight your needs and requirements.
      </p>

      <div className={styles.engagementRangesCardsMain}>
        {cardsData.map(({ title, body, icons }, idx) => (
          <div key={title}>
            <h3>M-{idx + 1}</h3>
            <div>
            <Image
            src={icons}
            alt={title}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <BackgroundHeading text={"Fixed Price"} />

      <div className={styles.engagementRangesMain}>
        <p>
          This model is well suited to clients who have well-structured process
          to gather requirements, scope, deliverable and acceptance criteria for
          the project. As you provide to us a clear idea, requirements, scope
          along with the deliverable and acceptance, we execute the projects on
          a fixed-price and billing basis. During developement, we provide
          phase-wise delivery and keep up with the delivery schedules. Consider
          it as one of the most effective and convenient models to cut down on
          your costs and stay within budget.
        </p>

        <div>
          <Image
            src={"/Images/engagementPhotos/meeting.webp"}
            alt={"meet image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
        </div>

      </div>

      <BackgroundHeading text={"Fixed Price"} />
      
      <div className={styles.engagementRangesMain}>
        <div>
          <Image
            src={"/Images/engagementPhotos/meeting.webp"}
            alt={"meet image"}
            width={"0"}
            height={"0"}
            sizes={"100vw"}
            style={{ width: "100%", height: "100%" }}
            />
        </div>

        <p>
          This is used when the resources and time can't be estimated upfront,
          at the start. For a project that has a constantly-evolving scop and
          perfect. It's a great agile model that's the best fit for iterative
          and incremental application development. We take your input and
          considerations at each stage keeping in mind that you require
          flexibility and continuous changes and advancements in the project.
          Adding to this, we follow a sorted project management process based on
          a daily/weekly reporting system, without any complexity. We charge the
          client based on the number of hours dedicated by each resource.
        </p>
      </div>
    </div>
  );
};
