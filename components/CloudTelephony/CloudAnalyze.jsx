import React from 'react'
import styles from "./CloudAnalyze.module.css"

export const CloudAnalyze = () => {
  return (
    <div className={styles.cloudanalyzemainboxesdiv}>
    <div className={styles.cloudanalyzeleftbox}>
    <img src='Images/cloudtelephony/analyze.png' alt='images' />
    </div>
    <div className={styles.cloudanalyzerightbox}>
    <h1>Analyze and improve your sales calls</h1>
    <p>Phone calls are one of the key performance drivers in your sales process.Easily track and analyze all the metrics that reflect the efficiency of your sales calls.Assess your salespeople's performance based on the calls they make, your business processes and customer interactions at every stage of the call and optimize them.</p>
    </div>
    
    </div>
  )
}
