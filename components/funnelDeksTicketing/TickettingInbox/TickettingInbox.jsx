import React from "react";
import styles from "./TickettingInbox.module.css";

export const TickettingInbox = () => {
  return (
    <div className={styles.tickettingInboxConatiner}>
      <div className={styles.ticketInboxHeading}>
        <h2>Team Inbox</h2>
        <p>
          Unlike Email Our Ticketing system is designed for team collaboration
          and agent productivity.This means that you can do so much more than
          just sending replies. prioritize every ticket based on the keywords.
          Assign every ticket to a specific agent and group so there is no
          confusion about who should be working on which ticket.
        </p>
      </div>
    </div>
  );
};
