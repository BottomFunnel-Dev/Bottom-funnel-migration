import React from "react";
import styles from "./eventsbanner.module.css";

export const EventsBanner = () => {
  return (
    <div className={styles.eventsHero}>
      <div className={styles.eventstextcontainer}>
        <div>
          <h1>Events Services App Solutions</h1>
          <p>
            We know that your business is more than just a storefront - it's
            about making life easier for those close to you. That's why we're
            proud to offer on demand home services app development solutions
            that provide you with the tools you need to keep your customers
            happy and satisfied. Our team of experts will work closely with you
            to develop an app that fits your organization's needs and goals,
            without sacrificing quality or functionality.
          </p>
          <button>Get Started </button>
        </div>
      </div>
    </div>
  );
};
