import React from 'react'
import styles from "./HireATalentDetail.module.css"

export default function HireATalentDetail () {
  return (
    <div className={styles.HireATalentDetailMain}>
        <h3>Your Personal Details</h3>
        <form>
            <label>Name</label><br/>
            <input type="text"></input><br/>
            <label>E-mail</label><br/>
            <input type="text"></input><br/>
            <label>Phone Number</label><br/>
            <input type="text"></input><br/>
            <label>Company Name</label><br/>
            <input type="text"></input>
        </form>
        <div className={styles.HireATalentDetailbtn}>
        <button>BACK</button>
        <button>SUBMIT</button>
      </div>
    </div>
  )
}
