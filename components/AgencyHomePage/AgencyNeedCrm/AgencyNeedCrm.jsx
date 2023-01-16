import React from 'react'
import style from "./AgencyNeedCrm.module.css";

export const AgencyNeedCrm = () => {
  return (
    <div className={style.AgencyNeedCrmmaindiv}>
        <div className={style.AgencyNeedCrmimage}>
            <img src="/Images/Agencyhomepagephotos/agencyneed.png" alt="image" />
        </div>
        <div className={style.AgencyNeedCrmcontain}>
            <h2>Why do agencies need CRM?</h2>
            <p>Today, agencies have to constantly reinvent themselves to stay relevant. With increased competition, higher demand from customers, and more focus of customers on ROI over creativity, it’s imperative for agencies to step up their game to become more customer-centric.</p>
        <p>A specialized advertising and media agency CRM software helps you discover and manage your client relationships better by providing a simple, intuitive and seamless experience across the customer lifecycle. It helps you evaluate prospects with advanced lead scoring features, gives a 360𝆩 view of all prospect and customer activity in a single page, automates a large portion of your daily tasks involved in servicing your customers, analyzes deals, and generates reports on how your business is performing and gaps that need to be addressed, enables you to maintain long-lasting, quality relationship with your customers and more.</p>
        </div>

    </div>
  )
}
