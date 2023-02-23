import React, { useState } from "react";
import styles from "./JobOpening.module.css";

export default function JobOpening({ currentopeningdata }) {
  const [jobchange, setJobchange] = useState(0);

  return (
    <div className={styles.jobopeningmainboxes}>
      <h1>Current Job Openings</h1>
      <p>
        We leave no stone unturned to deliver exceptional results to all of our
        client.We care about our work and the people we do it with.If you're on
        the same wavelengths as ours, a fulfilling
        <span> career in digital marketing </span>
        is waiting for you.
      </p>

      <div>
        {currentopeningdata.map((e, index) => (
          <div
            className={styles.hovering}
            key={index}
            onClick={() => {
              setJobchange(index);
            }}
          >
            <h3>{e.tittle}</h3>
          </div>
        ))}{" "}
      </div>

      <div className={styles.jobrequirementindivisualtypes}>
        {currentopeningdata[jobchange].content.map((item, id) => (
          <div key={id}>
            <h4>{item.jobreq}</h4>

            <p className={styles.skillrequired}>Skils Required</p>
            {item.skills.map((sk, idx) => (
              <div className={styles.jobrequirementhireatalentpara} key={idx}>
                <ul>
                  <li>{sk.devsk}</li>
                </ul>
              </div>
            ))}
            <div className={styles.flexingbutton}>
              <button className={styles.applytalentbannerbutton}>
                Full Time
              </button>
              <div className={styles.applytalentflexboxtxtyearexp}>
                Work Experience: 2-3 Years
              </div>
            </div>
            <button className={styles.talentapplyapplynowbutton}>
              Apply Now!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
