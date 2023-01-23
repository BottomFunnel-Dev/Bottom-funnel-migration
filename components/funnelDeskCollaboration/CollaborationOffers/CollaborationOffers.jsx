import React from "react";
import styles from "./CollaborationOffers.module.css";

export const CollaborationOffers = () => {
  const cardsData = [
    {
      title: "Get better visibility with shared ownership",
      body: "Share ownership of tickets with other teams without losing visibility and access to it, so that teams can work on the issue in parallel and stay in the loop regarding progress on the ticket. With the customer-facing agent having up-to-date information concerning the issue, you always have an answer for the customer.",
      image: "point-1.webp",
    },
    {
      title: "Divide and conquer issues with parent-child ticketing",
      body: "Resolve issues faster by splitting tickets into smaller tasks that respective teams can work on in parallel. With Parent-child Ticketing, the ticket is resolved only if every team completes the task assigned to them, so that each internal team is accountable for their role, and the ticket can be resolved only if every team has played a role.",
      image: "point-2.webp",
    },
    {
      title: "Solve related issues together with linked tickets",
      body: "When there is a sudden surge in incoming support tickets, start linking similar essues together and send status updates on all related ticket in one go. All the agents involved have up-to-date information on the progress being made with the issue, and can send consistent replies to their customers.",
      image: "point-3.webp",
    },
    {
      title: "Collaborate better with field teams",
      body: "Your helpdesk and field teams can collorate better thanks to a unified helpdesk and field service solution. All actionable service tasks are created linked to a ticket so helopdesk agents and field technicians have the full context of the problem when responding to customers.",
      image: "point-4.webp",
    },
  ];

  return (
    <div className={styles.CollaborationOffersContainer}>
      <h1>Our Collaboration tools offer</h1>
      <div className={styles.CollaborationOffersMain}>
        {cardsData.map(({ title, body, image }) => (
          <div key={title}>
            <div className={styles.CollaborationOffersContent}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <span></span>
            <div className={styles.CollaborationOffersImage}>
              <img
                src={`/Images/collaborationPhotos/${image}`}
                alt={`collaborationPhotos/${image}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
