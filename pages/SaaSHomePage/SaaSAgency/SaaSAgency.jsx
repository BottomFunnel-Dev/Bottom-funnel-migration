import React from 'react'
import style from "./SaaSAgency.module.css";

export const SaaSAgency = () => {
  return (
    <div className={style.SaaSAgencymaindiv}>
        <h1>Do this and more with Bottom Funnel Sales CRM for SaaS businesses</h1>
        <div className={style.SaaSAgencyinnerdiv}>
        <div className={style.SaaSAgencycarddiv}>
                <h4>Collaborate across teams in real-time </h4>
                <div className={style.SaaSAgencycarddivimage}>
                    <img src="Images/SaaShomepagephotos/Conversation-pana.png" alt="image" />
                </div>
                <p>Work on the same deal with different salespeople on Slack or Freshconnect and get more context with notes, tasks, and activities.</p>
            </div>
            <div className={style.SaaSAgencycarddiv}>
                <h4>Make accurate sales quotes</h4>
                <div className={style.SaaSAgencycarddivimage}>
                    <img src="Images/SaaShomepagephotos/Securedata-cuate.png" alt="image" />
                </div>
                <p>Enhance your efficiency, productivity, and maximize sales with configure-price-quote (CPQ). Collaborate with customers and build configurations and quotes quickly. </p>
            </div>
            <div className={style.SaaSAgencycarddiv}>
                <h4>Track app usage and drive product adoption</h4>
                <div className={style.SaaSAgencycarddivimage}>
                    <img src="Images/SaaShomepagephotos/Documents-cuate.png" alt="image" />
                </div>
                <p>Understand what features leads use on your app, categorize them into segments and trigger relevant campaigns to drive product adoption and usage.</p>
            </div>

        </div>
        
     
    </div>
  )
}
