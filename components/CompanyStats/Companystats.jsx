import React from "react";
// import { useState } from "react";
import styles from "./Company.module.css";

export const Companystats = () => {
  return (
    <div className={styles._CompanyMainDiv}>
      <div>
        <div className={styles._Company}>
          <h1>Company Statistics</h1>
        </div>
        <div className={styles._About}>
          <p className={styles._detail}>
            Bottom Funnel's IT services are the perfect solution when your
            business needs to go global. Our team of experts provide website
            development, app development and digital marketing strategies that
            will help you reach millions with ease.
          </p>
        </div>

        <div className={styles._Provider}>
          <h2>One-Door Solution Provider</h2>
        </div>

        <div className={styles._information}>
          Bottom Funnel has a strong team of developers who are well-versed in
          the subject. We have the expertise to meet corporate demands and are
          always willing to assist. In addition, we provide customized software
          and website development solutions for your company. If you're seeking
          for a skilled and professional mobile and web development firm, then
          Bottom Funnel should definitely be your first choice.
        </div>
      </div>

      <div className={styles._CompanyStats}>
        <div className={styles._stats}>
          <div className={styles._colordiv}></div>
          <div className={styles._statsnum}>
            <h5>71+</h5>
          </div>
          <div className={styles._statstext}>Countries we serve</div>
        </div>
        <div className={styles._stats}>
          <div className={styles._colordiv}></div>
          <div className={styles._statsnum}>
            <h5>450+</h5>
          </div>
          <div className={styles._statstext}>Clients around the world</div>
        </div>
        <div className={styles._stats}>
          <div className={styles._colordiv}></div>
          <div className={styles._statsnum}>
            <h5>11+</h5>
          </div>
          <div className={styles._statstext}>Years of work experience</div>
        </div>
        <div className={styles._stats}>
          <div className={styles._colordiv}></div>
          <div className={styles._statsnum}>
            <h5>88%</h5>
          </div>
          <div className={styles._statstext}>
            Of our customers recommend us to others
          </div>
        </div>
        <div className={styles._stats}>
          <div className={styles._colordiv}></div>
          <div className={styles._statsnum}>
            <h5>150+</h5>
          </div>
          <div className={styles._statstext}>Highly qualified employees</div>
        </div>
        <div className={styles._stats}>
          <div className={styles._colordiv}></div>
          <div className={styles._statsnum}>
            <h5>950+</h5>
          </div>
          <div className={styles._statstext}>Successfully completed projects</div>
        </div>
      </div>
    </div>
  );
};
