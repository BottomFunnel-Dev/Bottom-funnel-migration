import React from 'react'
import styles from "./PoliticsAppDevelopmentbanner.module.css"


export const PoliticsAppDevelopmentbanner = () => {
  return (
    <div className={styles.politicsappdevelopmentmainboxes}>
    <div className={styles.politicsappdevelopmenttxtboxes}>
    <h1>Politics App Development</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dolor molestie, tristique odio non, aliquam leo. Cras eu venenatis quam. Nulla euismod elit sapien, eget fermentum sapien condimentum ut. Nullam vel sapien nec sapien rutrum gravida sed maximus massa. Etiam vulputate eget diam non tempus. Aenean quis euismod nisl. </p>
    
    <button className={styles.politicsbannerbutton}>Get started</button>
    </div>
    
    </div>
  )
}
