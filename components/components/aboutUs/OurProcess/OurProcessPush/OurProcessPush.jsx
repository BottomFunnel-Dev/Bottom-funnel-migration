import React from "react";
import styles from "./OurProcessPush.module.css";

export const OurProcessPush = () => {
  const cardsData = [
    {
      title: "What we do best",
      body: "Bottom Funnel is a world-leading supplier of software solutions. Our product range includes everything from accounting and ERP systems to CRMs and marketing automation tools. We've got you covered no matter what your needs are, so you can focus on growing your business without having to worry about IT infrastructure.",
    },
    {
      title: "How we started",
      body: "Bottom Funnel is all about making people happy and giving them the best experience possible. We started off with just 10 employees and have grown to be a team of over 120 people today. Our passion for success has helped us grow exponentially, and we are proud to say that we are one of the largest brand consultants in India today.",
    },
    {
      title: "What our goal",
      body: "Bottom Funnel is a company that has been working towards becoming the best in their field for longer than most of us can remember. And they have a specific way of defining success - it's in the satisfaction of their clients. They strive to understand and meet each client's needs by offering them solutions tailored to suit their specific needs.",
    },
  ];

  return (
    <div className={styles.OurProcessPushmain}>
      <p>PUSH YOUR BUSINESS WITH US!</p>
      <h1>
        We Help You With Our <span>Best In Class</span>
      </h1>
      <p className={styles.innovatoraboutusptag}>
        Bottom Funnel is an innovator in the industry and has been a pioneer in
        developing cutting-edge technologies. With its expertise and knowledge,
        it can give you the best possible solutions for your business needs.
        Bottom Funnel is a smart choice when you want your business to scale
        quickly and reach its full potential.
      </p>

      <div className={styles.innovatorAboutUsMainDiv}>
        {cardsData.map(({ title, body }, idx) => {
          return (
            <div>
              <h1>{idx + 1}</h1>
              <div>
                <h1>{title}</h1>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
