import React from 'react'
import { PopupForm } from '../PopupForm/PopupForm'
import styles from "./Eventbanner.module.css"


export const Eventbanner = () => {
  return (
    <div className={styles.eventbannermainboxes}>
    <div className={styles.eventbannersometextboxes}>
    <h1><span>Event</span> App Development</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel dolor molestie, tristique odio non, aliquam leo. Cras eu venenatis quam. Nulla euismod elit sapien, eget fermentum sapien condimentum ut. Nullam vel sapien nec sapien rutrum gravida sed maximus massa. Etiam vulputate eget diam non tempus. Aenean quis euismod nisl. Morbi lectus ipsum, sodales sit amet tellus vel, gravida mattis mauris.</p>
    <button className={styles.eventbannerbutton}
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
    
    >Request a call</button>

    <div
    className="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div>
          <PopupForm />
        </div>
      </div>
    </div>
  </div>
    
    </div>

    </div>
  )
}
