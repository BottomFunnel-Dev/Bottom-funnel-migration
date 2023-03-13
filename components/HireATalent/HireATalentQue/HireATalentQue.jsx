import React from "react";
import styles from "./HireATalentQue.module.css";

export default function HireATalentQue() {
  const quedata = [
    {
      ques: "What characteristics does your company value the most?",
    },
    {
      ques: "Are leadership or team management skills required for these roles?",
    },
    {
      ques: "What is the career path for these talents in the long run?",
    },
    {
      ques: "What is the monthly budget allocated for these roles?",
    },
    {
      ques: "What will be the interview process?",
    },
  ];
  return (
    <div className={styles.HireATalentQueMain}>
      <h2>Matchmaking Questions</h2>
      <p>
        This will allow us to match someone who can easily make a space in your
        team, gel up well and make a difference.
      </p>
      {quedata.map((e) => {
        return (
          <div className={styles.HireATalentQuelist}>
            <p>{e.ques}</p>
            <input type="text" placeholder="Please give your answer"></input>
          </div>
        );
      })}

      <hr></hr>
      <div className={styles.HireATalentQuebtn}>
        <button>BACK</button>
        <button>NEXT</button>
      </div>
    </div>
  );
}
