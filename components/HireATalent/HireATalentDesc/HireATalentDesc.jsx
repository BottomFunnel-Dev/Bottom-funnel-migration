import React from 'react'
import styles from "./HireATalentDesc.module.css"

export default function HireATalentDesc () {
  return (
    <div className={styles.HireATalentDescMain}>
        <h2>Add roles & responsibilities of the Talent.<span>*</span></h2>
        <textarea rows="10" cols="50"></textarea>
        <div className={styles.HireATalentDeschr}>
        <hr ></hr>
        <h3>OR</h3>
        <hr></hr>
        </div>
        <div className={styles.HireATalentDescFile}>
            <h4>Browse your file</h4>
            <input type="file"></input>
        </div>
        <div className={styles.HireATalentDescbtn}>
            <button>BACK</button>
            <button>NEXT</button>
        </div>
    </div>
  )
}
