import React from "react";
import styles from "./WhyAutomation.module.css";
import Image from "next/image";

export const WhyAutomation = () => {
  const cardsData = [
    {
      title: "Easy to set-up and manage",
      description:
        "Freshdesk creates an automatic summary of every rule that looks like a simple workflow document. The rule summaries and the simple form interface makes setting up automations quick and easy.",
      image: "/Images/funneldeskAutomation/task.png",
    },
    {
      title: "Manage dependencies efficiently",
      description:
        "When you need inputs from a different team, automations can remind, alert and bring tickets with dependencies to the attention of the right people at the right time.",
      image: "/Images/funneldeskAutomation/setting.png",
    },
    {
      title: "Multi-level logical operators",
      description:
        "With the flexibility to use a combination of AND/OR coditions and multi-select opions, you can set-up powerful rules to automate any complex workflow.",
      image: "/Images/funneldeskAutomation/light.png",
    },
    {
      title: "Scalable",
      description:
        "Every automation rule comes with an audit log to help you keep track of changes easily. When you need to make changes, you can test them in a sandbox and have them automatically synced to your live account.",
      image: "/Images/funneldeskAutomation/world.png",
    },
    {
      title: "AI-powered",
      description:
        "Automations do not reopen tickets that have responses like 'gracias' or 'all good'. By not opening tickets that don't need any further action, Freshdesk ensures that your reporting metrics aren't skewed.",
      image: "/Images/funneldeskAutomation/tech.png",
    },
  ];

  return (
    <div className={styles.whyAutomationContainer}>
      <h1>Why our automations are one of a kind</h1>
      <div>
        {cardsData.map(({ title, description, image }) => (
          <div className={styles.whyAutomationMain}>
            <div>
              <Image
                src={image}
                alt={image}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "40px", height: "fit-content" }}
              />
              <h2>{title}</h2>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
