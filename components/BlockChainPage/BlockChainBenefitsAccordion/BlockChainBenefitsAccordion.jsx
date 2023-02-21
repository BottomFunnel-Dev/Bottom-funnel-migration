import React, { useState } from "react";
import styles from "./BlockChainBenefitsAccordion.module.css";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@/material";

export const BlockChainBenefitsAccordion = () => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange =
    (panel) =>
      (event = React.SyntheticEvent, isExpanded = boolean) => {
        setExpanded(panel);
      };

  const cardsData = [
    {
      title: "Accelerate Growth",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non cupiditate tempora distinctio, consectetur aspernatur aliquid reiciendis voluptates tenetur dolor totam!",
    },
    {
      title: "Highly Secured Processes",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non cupiditate tempora distinctio, consectetur aspernatur aliquid reiciendis voluptates tenetur dolor totam!",
    },
    {
      title: "Faster Transactions",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non cupiditate tempora distinctio, consectetur aspernatur aliquid reiciendis voluptates tenetur dolor totam!",
    },
    {
      title: "Less Intermediary Transaction",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non cupiditate tempora distinctio, consectetur aspernatur aliquid reiciendis voluptates tenetur dolor totam!",
    },
    {
      title: "Customer Engagement",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non cupiditate tempora distinctio, consectetur aspernatur aliquid reiciendis voluptates tenetur dolor totam!",
    },
    {
      title: "Increased ROI",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non cupiditate tempora distinctio, consectetur aspernatur aliquid reiciendis voluptates tenetur dolor totam!",
    },
  ];

  return (
    <div className={styles.BlockChainBenefitsAccordionContainer}>
      <div className={styles.BlockChainBenefitsAccordionMain}>
        <h1>Blockchain And Its Benefits</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          laudantium excepturi ex sit eaque vero maiores! Assumenda fugiat, non
          cupiditate tempora distinctio, consectetur aspernatur aliquid
          reiciendis voluptates tenetur dolor totam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eveniet laudantium excepturi ex sit
          eaque vero maiores! Assumenda fugiat, non cupiditate tempora
          distinctio, consectetur aspernatur aliquid reiciendis voluptates
          tenetur dolor totam!Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eveniet laudantium excepturi ex sit eaque vero maiores!
          Assumenda fugiat, non cupiditate tempora distinctio, consectetur
          aspernatur aliquid reiciendis voluptates tenetur dolor totam!
        </p>
      </div>

      <div className={styles.BlockChainBenefitsAccordionAccordionContainer}>
        {cardsData.map(({ title, body }, idx) => {
          return (
            <Accordion
              expanded={expanded === `panel${idx}`}
              onChange={handleChange(`panel${idx}`)}
              id="BlockChainBenefitsAccordion-accordion-main"
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header BlockChainBenefitsAccordion-accordion"
              >
                <h3 className={styles.BlockChainBenefitsAccordionAccordionH3}>
                  {title}
                </h3>
              </AccordionSummary>

              <AccordionDetails
                id="panel1a-details"
                style={{ backgroundColor: "white", color: "#393939" }}
              >
                <p style={{ fontSize: "16px", textAlign: "justify" }}>{body}</p>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
