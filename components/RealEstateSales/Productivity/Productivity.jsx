import React from 'react'
import style from "./Productivity.module.css";

export const Productivity = () => {
  return (
    <div>
          <div className={style.Productivitymaindiv}>
       
        <div className={style.Productivityinnerdiv}>
            <h2>Boots productivity with powerful automations</h2   >
       <p>How many times have you seen real estate agents perform the same tasks repeatedly? Whether it’s mailing buyer contracts or making follow-up calls for payments, timeliness and consistency are key. Bottom Funnel Sales for real estate agents comes with automation capabilities allowing the system to:</p>
         <ul>
            <li>Schedule follow-up calls and emails for different scenarios, such as payment, prospecting, official document requirements, etc</li>
            <li>Choose from pre-designed workflow templates to automate routine tasks</li>
            <li>Create and schedule automated, yet personalized newsletters and emails</li>
            <li>Create tasks, reminders, and appointments</li>
            <li>Seamlessly move deals across the pipeline</li>
            <li>Update contact fields</li>
           <i>Send invoices</i>
            </ul>
            <p>And more, while your realtors can spend more time selling properties. </p>
           
           
            <p className={style.Productivitymore}>Learn More</p>
            <div className={style.Productivityimagediv}>
                <img src="Images/realestatesales/productivity.png" alt="image" />
            </div>
        
       
        </div>

        <div className={style.Productivityinnerdiv}>
            <h2>Take smart decisions with insightful analytics</h2   >
         <p>To make any critical decisions, you’ll need to know your team’s capability—top performers, targets vs. achieved, campaign performance, website traffic, etc. Knowing this helps you identify bottlenecks, find the reason for lost deals, or optimize your website. </p>
          <p>Bottom Funnel Sales software for real estate gives you real-time insights into business-critical metrics in a single dashboard and analyzes performance. You can create custom dashboards for sales to view the numbers at a glance anytime or automate to send the reports to your inbox at regular intervals. </p>
          <p className={style.Productivitymore}>Learn More</p>
            <div className={style.Productivityimagediv}>
                <img src="Images/realestatesales/insightful.png" alt="image" />
            </div>
        
       
        </div>
    </div>
    </div>
  )
}
