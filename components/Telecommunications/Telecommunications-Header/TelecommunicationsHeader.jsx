import React from 'react';
import styles from './telecommunicationsHeader.module.css';
import Image from 'next/image';
import { PopupForm } from '../../PopupForm/PopupForm';

export const TelecommunicationsHeader = () => {
  return (
    <div className={styles.telecommunicationsHeaderContainerMain}>
      <div className={styles.telecommunicationsHeaderLeftDiv}>
        <div className={styles.telecommunicationsHeaderTitle}>
          <h1>Custom Telecommunication Software Development</h1>
          <p>Telecommunication software  is used to organize and manage all aspects  of electronic data {"(text, voice, video etc.)"} exchange. A software development partner of T-Mobile, Orange, and Vibe with 17 years in telecom software development, ScienceSoft builds OSS, BSS, customised VoIP/IPTV software etc.</p>
          <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          
          >Get Started</button>

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

      <div className={styles.telecommunicationsHeaderRightDivForImg}>
        <div className={styles.telecommunicationsHeaderRightImg}>
             <Image
                  src={"/Images/Telecommunication/Frame1.webp"}
                  alt={"image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
        </div>
      </div>
    </div>
  )
}
