import React from "react";
import { SaasCards } from "../SaasCards/SaasCards";
import styles from "./SaasValuable.module.css";
import Image from "next/image";

export const SaasValuable = () => {
  const cardsData = [
    {
      icon: "/Images/saasPhotos/description.webp",
      title: "Project description",
      description:
        "Bottom funnel saas app development is a new trend in the world of marketing, making it possible to reach out to relevant audience. SaaS companies are taking advantage of it and so, should you. That's why we're here to help you with one of the most important things when it comes to developing your app: understanding who you're marketing to and what they need. We will give you that insight you need and make sure that your business is getting the results it deserves.",
    },
    {
      icon: "/Images/saasPhotos/process.webp",
      title: "Process design",
      description:
        "We know that everyone has their own way of doing things, so we wanted to make sure that the Saas App Development process was flexible enough for you. That's why we created an approach where our experts work closely with you to understand your business, and then build it from scratch. This way, you get exactly what you want out of the app without any unnecessary hassles.",
    },
    {
      icon: "/Images/saasPhotos/coding.webp",
      title: "Design to codes",
      description:
        "We have world-class SaaS application developers who have years of experience and know every nook and corner of modern web development. They are capable of taking your ideas to life with elegance and fluency. They can also take care of all the other aspects that make a programming job easier.",
    },
    {
      icon: "/Images/saasPhotos/backend.webp",
      title: "Backend comes into existence",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, natus itaque similique minus excepturi facilis laudantium. Placeat, magni nobis impedit commodi velit consequuntur at optio qui id praesentium dolor eveniet.",
    },
    {
      icon: "/Images/saasPhotos/perfect.webp",
      title: "Saas application is tested to perfection",
      description:
        "We are a time-honored tradition, and for good reason. With our in-depth understanding of the ins and outs of backend development, we're able to craft a seamless experience that puts your users' needs front and center. From database integration to frontend functionality, we've got you covered from A to Z. And with our team of skilled backend SaaS application developers on hand, you can rest assured that your project will run like clockwork.",
    },
    {
      icon: "/Images/saasPhotos/maintain.webp",
      title: "Saas maintenance",
      description:
        "SaaS maintenance? Why not! We are the saas application development company that offers a 6-month warranty with the Service Level Agreement on developed SaaS solution. Also, we give provision to add new functionalities in the SaaS as and when required. So, what are you waiting for? Join us today to get a hassle-free experience!",
    },
  ];

  return (
    <div className={styles.SaasValuableMain}>
      <div className={styles.SaasValuableImages}>
            <Image
                src={"/Images/saasPhotos/valuable.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        <br />
        <div className={styles.SaasValuableFunnelImage}>
            <Image
                src={"/Images/saasPhotos/funnel.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        </div>
      </div>
      <div className={styles.SaasValuableContent}>
        <div className={styles.SaasValuableContentHeading}>
        <h1>
          How we convert your cloud ideas into SaaS application that are
          scalable, parctical and valuable
        </h1>
        <p>
        Bottom funnel software development is all about bridging the gap between your cloud-based ideas and real-world SaaS applications. Through a unique approach, our team of experts is able to turn your vision into a working product that's scalable, practical and valuable. We understand the intricacies of creating SaaS applications, so we use our expertise to translate your ideas into reality. 
        </p>
        </div>
        <div>
          {cardsData.map((elem) => {
            return <SaasCards data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
