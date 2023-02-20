import React from 'react'
import styles from "./Eventbanner.module.css"


export const Eventbanner = () => {
  return (
    <div className={styles.eventbannermainboxes}>
    <div className={styles.eventbannersometextboxes}>
    <h1><span>Event</span> App Development</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dolor molestie, tristique odio non, aliquam leo. Cras eu venenatis quam. Nulla euismod elit sapien, eget fermentum sapien condimentum ut. Nullam vel sapien nec sapien rutrum gravida sed maximus massa. Etiam vulputate eget diam non tempus. Aenean quis euismod nisl. Morbi lectus ipsum, sodales sit amet tellus vel, gravida mattis mauris.</p>
    <button className={styles.eventbannerbutton}>Request a call</button>
    
    </div>

    </div>
  )
}
