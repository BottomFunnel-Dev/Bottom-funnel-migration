import React from "react";
import styles from "./Politicalparty.module.css";

export default function Politicalparty() {
  return (
    <div className={styles.szPolitical}>
      <div className={styles.szpolitichead}>
        <h1>What is the Role of Apps for Political Parties ?</h1>
      </div>

      <div className={styles.szPoliticalsub}>
        <div className={styles.szPoliticaldiv}>
          <p>
            The role of apps for political parties is no secret anymore. From
            providing information, analytics, and engaging with voters to
            collecting data and keeping track of donations, app development has
            become a necessity rather than an option for winning elections. Bottom Funnel technologies believes in making technologies impactful by developing
            mobile applications that make the difference.
          </p>
          <p>
            With years of experience in creating apps for demanding clients, we
            deliver an end-to-end solution that includes full software
            engineering and user experience design to ensure your app stands out
            from the crowd. We don't just understand what you want your app to
            do; we know how to get it done so your users feel as if they are
            part of the party's ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}
