import React from "react";
import { SaasCards } from "../SaasCards/SaasCards";
import styles from "./SaasSuite.module.css";
import Image from "next/image";

export const SaasSuite = () => {
  const cardsData = [
    {
      icon: "/Images/saasPhotos/consulting.webp",
      title: "SaaS app development consulting",
      description:
        "You can trust on the pioneers of this new-gen thinking who are skilled in helping you build your best app possible. With years of experience and expertise, they know how to take your idea and turn it into a reality. They have the knowledge and understanding of what is needed by businesses today to get their foot in the door, or stand out from the crowd. ",
    },
    {
      icon: "/Images/saasPhotos/saas-dev.webp",
      title: "SaaS app development",
      description:
        "Creating a saas app is nothing but an art, which requires expert skills, understanding of the domain and creativity. With months of experience and a team here at bottom funnel that understands the domain, we are happy to offer you top-notch SaaS app development services. By partnering with us, you can be sure that your app will be developed by experts who know what they're doing and how to do it.",
    },
    {
      icon: "/Images/saasPhotos/optimization.webp",
      title: "SaaS app optimization",
      description:
        "When it comes to business, you want your online presence to be as effective as possible. That's why we've created SaaS app optimization, an app that can help your company's online marketing efforts go viral! With our app, your customers can sign up for automatic updates on new products and sales, saving them time and money while driving traffic from search engines.",
    },
    {
      icon: "/Images/saasPhotos/design.webp",
      title: "SaaS app design",
      description:
        "Bottom funnel saas app development isnt just about adding new features to the existing app. Its about creating an engaging and modern looking app that can draw in new users. With our top-notch skills, you get a beautiful SaaS app design that's professional yet easy on the eye. We start by understanding your users and their needs, before building a responsive website or mobile application that matches them perfectly. From there, we work together to build the perfect solution for your brand.",
    },
    {
      icon: "/Images/saasPhotos/architecture.webp",
      title: "Multi-tenant architecture upgrade",
      description:
        "You are an expert in building enterprise-grade websites and you want to upgrade your old architecture to a modern one. But, you're unsure about the new possibilities that a multi-tenant architecture opens up for you. Don't worry! A brand new app will be a perfect fit for your business today and tomorrow. We know that all businesses are different, but we have one thing in common: We look at each project as its own unique entity, where we understand the unique needs of your business and build solutions from the ground up.",
    },
    {
      icon: "/Images/saasPhotos/migration.webp",
      title: "Technology migration",
      description:
        "Our developers have years of experience in handling large-scale projects, so your data will be protected from the very start. We use cutting-edge tools and techniques to help us get the most out of your tech, so we can work faster and smarter than our competitors. Plus, we're friendly and approachable - which means you'll feel confident about asking questions along the way.",
    },
  ];

  return (
    <div className={styles.SaasSuiteMain}>
      <div className={styles.SaasSuiteContent}>
        <div className={styles.SaasSuiteContentHeading}>
          <h1>
            Our suite of SaaS application <br /> development services
          </h1>
          <p>
            Bottom funnel saas app development services bring innovation and
            freshness in every project that you take up. We don't just create
            apps; we build them from scratch with all the features that your
            business requires. From customizing code to building the whole user
            interface, our team takes care of everything to make sure everything
            works as per your specifications. So next time when you think about
            switching over to a new software platform, stop thinking and let us
            do the work for you!
          </p>
        </div>
        <div>
          {cardsData.map((elem) => {
            return <SaasCards data={elem} />;
          })}
        </div>
      </div>
      <div className={styles.SaasSuiteImages}>
           <Image
                src={"/Images/saasPhotos/expertise.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        <br />
        <div className={styles.SaasSuiteFunnelImage}>
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
    </div>
  );
};
