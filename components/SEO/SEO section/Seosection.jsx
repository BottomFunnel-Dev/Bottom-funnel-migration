import React from "react";
import { PopupForm } from "../../PopupForm/PopupForm";
import { SeoForm } from "../seoForm/SeoForm";
import styles from "./Seosection.module.css";

function Seosection() {
  return (
    <div className={styles._SeoMain1}>
      <div className={styles.gifDenote}>
        <lottie-player
          src="/Animation/DMAnimation/1.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className={styles._Seoupperdiv}>
        <div className={styles._Seotext}>
          <div className={styles.Seoheading}>
            Professional SEO Services Company
          </div>
          <p className={styles._Seoparagraph}>
            We are a team of SEOs and analysts who drive results through our
            know-how and hard work. We get the job done properly and
            efficiently, so that your online presence gets noticed. Whether it
            is a blog post or an e-commerce website, we make sure they reach
            their target audience online.
          </p>
          <button className={styles._Seochkpricing}
           type="button"
           data-bs-toggle="modal"
           data-bs-target="#staticBackdrop"
          >Check the pricing</button>

          <div
          className="modal fade"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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
        <SeoForm />
      </div>
    </div>
  );
}

export default Seosection;
