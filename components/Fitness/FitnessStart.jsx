import React from 'react';
import styles from "./FitnessStart.module.css";

export default function Fitnessstart() {
  return (
    <div className={styles.fitnessstart}>

      <div className={styles.fitnessstartcontainer}>
        <h2>Get all the fitness solution for all the kind of platforms</h2>
        <button className={styles.szstartbtn}>Let's Get Started</button>
      </div>
    </div>
  )
}
