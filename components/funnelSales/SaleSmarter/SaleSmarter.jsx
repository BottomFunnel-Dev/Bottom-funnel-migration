import React from "react";
import styles from "./SaleSmarter.module.css";

export const SaleSmarter = () => {
  return (
    <div>
      <div className={styles.saleSmarterDivupperheading}>
        <h1>Sell Smarter and faster with Bottom Funnel Sales</h1>
      </div>

      <div className={styles.saleSmarterDiv}>
        <div className={styles.saleSmarterInnerdiv}>
          <div className={styles.saleSmarterHeading}>
            <h2>Free</h2>
          </div>
          <div className={styles.saleSmarterParagrafdiv}>
            <p>
              Get sales teams organized and engage leads fast with built-in
              chat, email, and phone{" "}
            </p>
          </div>
          <div className={styles.saleSmarterPricediv}>
            <h1>₹0</h1>
            <h6>per user/month, billed annually </h6>
            <button className={styles.saleSmarterButton}> SIGN UP </button>
          </div>
          <div className={styles.saleSmarterListdiv}>
            <h6>Includes</h6>
            <ul>
              <li>Contact & Account Management </li>
              <li>Contact Lifecycle Stages</li>
              <li>Built-in Chat, Email, & Phone</li>
              <li>24x5 Support</li>
              <li>Mobile App</li>
            </ul>
          </div>
        </div>
        <div className={styles.saleSmarterInnerdiv}>
          <div className={styles.saleSmarterHeading}>
            <h2>Growth</h2>
          </div>
          <div className={styles.saleSmarterParagrafdiv}>
            <p>
              Powerful CRM automation to help growing sales teams avoid
              repetitive work and spend more time selling
            </p>
          </div>
          <div className={styles.saleSmarterPricediv}>
            <h1>₹829</h1>
            <h6>per user/month, billed annually </h6>
            <button className={styles.saleSmarterButton}> SIGN UP </button>
          </div>
          <div className={styles.saleSmarterListdiv}>
            <h6>Everything in Free, plus</h6>
            <ul>
              <li>Visual Sales Pipeline </li>
              <li>AI-powered Contact Scoring</li>
              <li>Sales Sequences</li>
              <li>Up to 2,000 Bot Sessions/Month</li>
              <li>WhatsApp Business</li>
            </ul>
          </div>
        </div>

        <div className={styles.saleSmarterInnerdiv}>
          <div className={styles.saleSmarterHeading}>
            <h2>Pro</h2>
          </div>
          <div className={styles.saleSmarterParagrafdiv}>
            <p>
              Everything you need to manage multiple sales teams and grow
              revenue like a pro
            </p>
          </div>
          <div className={styles.saleSmarterPricediv}>
            <h1>₹2367</h1>
            <h6>per user/month, billed annually </h6>
            <button className={styles.saleSmarterButton}> SIGN UP </button>
          </div>
          <div className={styles.saleSmarterListdiv}>
            <h6>Everything in Growth, plus</h6>
            <ul>
              <li>Multiple Sales Pipelines </li>
              <li>Time-based Workflows</li>
              <li>AI-power Deal Insights & Next Best Action</li>
              <li>Up to 3,000 Bot Session/Month FREDDY</li>
            </ul>
          </div>
        </div>

        <div className={styles.saleSmarterInnerdiv}>
          <div className={styles.saleSmarterHeading}>
            <h2>Enterprise</h2>
          </div>
          <div className={styles.saleSmarterParagrafdiv}>
            <p>CRM your way Advanced customization, governance,and controls </p>
          </div>
          <div className={styles.saleSmarterPricediv}>
            <h1>₹3799</h1>
            <h6>per user/month, billed annually </h6>
            <button className={styles.saleSmarterButton}> SIGN UP </button>
          </div>
          <div className={styles.saleSmarterListdiv}>
            <h6>Everything in Pro, plus</h6>
            <ul>
              <li>Custom Modules</li>
              <li>AI-based Forecasting insights</li>
              <li>Audit Logs</li>
              <li>Up to 5,000 Bot Sessions/Month</li>
              <li>Dedicated Account Manager</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.saleSmartertext}>
        <p>All prices are exclusive of applicable taxes</p>
      </div>
    </div>
  );
};
