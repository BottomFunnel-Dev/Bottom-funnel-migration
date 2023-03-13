import React, { useState } from "react";
import styles from "./HireATalentMain.module.css";

export default function HireATalent({ currentopeningdata }) {
  const [jobchange, setJobchange] = useState(0);
  const [skills, setSkills] = useState(0);

  return (
    <div className={styles.HireATalentMain}>
      <h1>
        Uplers is the fastest way to hire remote talents from India. Let’s start
        by answering a few simple questions.
      </h1>
      <h2>
        This will allow us to understand your requirements and match the perfect
        talent.
      </h2>

      <div className={styles.HireATalenthire}>
        <p>
          What role are you Hiring? <span>*</span>
        </p>
        <hr></hr>
        <div className={styles.HireATalentjobs}>
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
          ))}
        </div>
      </div>

      <div className={styles.HireATalentreq}>
        {currentopeningdata[jobchange].content.map((el, id) => (
         
            <div
            className={styles.req}
            key={id}
            onClick={() => {
              setSkills(id);
              console.log("hi")
            }}>
              <h3>{el.jobreq}</h3>
            
            </div>
        ))}
      </div>

        <div className={styles.HireATalentskill}>
            {currentopeningdata[jobchange].content[skills].req.map((item, idx) => ( 
              <div key={idx}
              className={styles.skill}>
                
                 <h3>{item.skill}</h3> <span><div>Worldwide</div></span>
                    <div className={styles.level}>
                  {item.exp.map((e, idx) => (
                    <div className={styles.exp}>
                        <h4>{e.lvl}</h4>
                        <p>{e.yr}</p>
                    </div>
                   ))}
                    </div>
                   <div/>
              </div>
              
              ))}
            </div>
      
    <p>other skills</p>
    <input type="text"></input>
      <button >LET'S START</button>
    </div>
  );
}
