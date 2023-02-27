import React from 'react'
import styles from "./AviationLower.module.css"
import Image from 'next/image'
import { PopupForm } from '../PopupForm/PopupForm'

export default function AviationLower ()  {

  return (
    <div className={styles.AviationLowermain}>
        <div className={styles.AviationLowerText}>
            <h5>Boost your revenue with our online payment app developement services.</h5>
            <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            >Let's Get Started</button>

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
        <div className={styles.AviationLowerImg}>
        <Image src={"/Images/aviation/Newpage/screens/Group 1000006132.webp"}
                alt={"images"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
              />
        </div>
    </div>
  )
}
