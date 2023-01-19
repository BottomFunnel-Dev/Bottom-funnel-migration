import React from "react";
import styles from "./VettingGrow.module.css";

export const VettingGrow = () => {
  const cardsData = [
    { title: "Network", stats: "50,000+ Talents" },
    { title: "Process", stats: "5 Days Hiring" },
    { title: "Talent", stats: "Top 4% Vetted" },
    { title: "Cost Advantage", stats: "Upto 40%" },
    { title: "Time Zone Available", stats: "5+ Time Zones" },
  ];
  return (
    <div className={styles.vettingGrowContainer}>
      <h1>
        How does our <span>Vetting process</span> helping growing the company
        faster?
      </h1>

      <div>
        <div className={styles.vettingGrowMain}>
          {cardsData.map(({ title, stats }) => (
            <div>
              <h2>{title}</h2>
              <h2>{stats}</h2>
            </div>
          ))}
        </div>
        <p>
          Want to know about the project before committing resources? We do 95%
          of our business in less than 24 hours. Take a second and let us know a
          bit about yours. We will respond within 1 business day, and we will be
          happy to discuss your requirements with you in detail! Bottom Funnel
          is an upcoming venture that aims at providing comprehensive services
          for startups across the globe. Our team comprises of experienced and
          knowledgeable professionals who are well-versed on all aspects of
          startup operations. In addition to this, we have access to
          best-in-class technologies and systems that help startups grow rapidly
          and efficiently. So, if you're looking for someone who can help you
          scale up your business quickly without compromising on quality, look
          no further than Bottom Funnel!
        </p>
      </div>
    </div>
  );
};
