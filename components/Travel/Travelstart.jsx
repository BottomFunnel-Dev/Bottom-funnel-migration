import React from 'react'
import styles from "./Travelstart.module.css"

export default function Travelstart() {
  return (
    <div className={styles.travelstart}>

    <div className={styles.travelstartcontainer}>
        <h2>Get all the fitness solution for all the kind of platforms</h2>
        <button className={styles.sztravelstartbtn}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        
        
        >Let's Get Started</button>
    </div>
</div>
  )
}
