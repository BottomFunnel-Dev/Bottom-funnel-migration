import React from "react";
import styles from "./RetailShopers.module.css";

export const RetailShopers = () => {
  return (
    <div className={styles.retailshopmainbox}>
      <div className={styles.retailshopupperboximageandtextflexbox}>
        <div className={styles.retailshopupperboxtextleft}>
          <div className={styles.retailshopupperboxtextleftouterbox}>
            <div className={styles.retailshopupperboxtextsvgallfilethere}>
              <h1>Cater to today's dynamic shoppers</h1>
              <p>
                Your shoppers are constantly switching between your
                website,shopping apps. and in-store purchases.Make customer
                service easy by delivering consustent service across channels.
              </p>
              <ul>
                <li>
                  Integrate phone,live-chat ,email,social,FB Messanger,Whatsapp
                  and more
                </li>
                <li>
                  Save abandoned charts with live-chat and proactive messages
                </li>
                <li>
                  Respond to queries faster with omnichannel queue management
                </li>
                <li>
                  Integrate with 3d party marketplaces like Amazon,eBay for
                  consistent services
                </li>
              </ul>
              <h6 className={styles.colored}>
                <span>Explore omnichannel customer services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.retailshopupperboximageright}>
          <img
            src="/Images/Retail&ecommerce/Animations/animations-1.gif"
            alt="Retail&ecommerce/Animations/animations-1.gif"
          />
        </div>
      </div>
    </div>
  );
};
