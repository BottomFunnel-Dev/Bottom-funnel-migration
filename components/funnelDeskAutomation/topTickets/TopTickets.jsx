import React from "react";
import styles from "./TopTickets.module.css";
import Image from "next/image";

export const TopTickets = () => {
  const cardsData = [
    {
      title: "Get rid of to-do lists",
      description:
        "Automations scan through all your tickets every one hour to check if there's a need for an update or an alert. From following up with collaborators that you need inputs from, following up with collaborators that you need inputs from, reminding you about pending work, to checking on customers, Freshdesk automates all redundant work. You can be assured that no task slips through the cracks.",
      image: "funneldeskAutomation/fullMonitor.gif",
    },
    {
      title: "Auto-assign tickets to the right agents",
      description:
        "With automatic ticket assignment, issues are brought to the attention of the right agent instantly. Tickets can be assigned based on an agent's skill, their workload or they can be distributed equally amongst your team. All your team has to do is work from their inbox views. This way, you can be assured that your customers get answers as quickly as possible.",
      image: "funneldeskAutomation/fullMonitor.gif",
    },
  ];
  return (
    <div className={styles.topTicketsContainer}>
      <h1>Stay on top of your tickets</h1>
      <div>
        {cardsData.map(({ title, description, image }) => (
          <div className={styles.topTicketsMain}>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <span>
              <Image
                src={`/Images/${image}`}
                alt={image}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
