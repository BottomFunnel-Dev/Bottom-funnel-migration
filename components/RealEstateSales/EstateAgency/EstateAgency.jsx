import React from 'react'
import style from "./EstateAgency.module.css";

export const EstateAgency = () => {
  return (
    <div className={style.EstateAgencymaindiv}>
        <h1>What else can Bottom Funnel Sales do for your real estate agency</h1>
        <div className={style.EstateAgencyinnerdiv}>
        <div className={style.EstateAgencycarddiv}>
                <h4>Get rid of stack of life </h4>
                <div className={style.EstateAgencycarddivimage}>
                    <img src="Images/realestatesales/Documents-cuate.png" alt="image" />
                </div>
                <p>Record and manage all your files from within the CRM. Integrate with e-signing applications to send, sign, and manage all your agreements, paperless.</p>
            </div>
            <div className={style.EstateAgencycarddiv}>
                <h4>Stay Protected</h4>
                <div className={style.EstateAgencycarddivimage}>
                    <img src="Images/realestatesales/Secure data-cuate.png" alt="image" />
                </div>
                <p>Bottom Funnel Sales is built with security at heart to secure your data and provide high resilience. Additionally, role-based access allows you to restrict data access based on your employees hierarchy or role.</p>
            </div>
            <div className={style.EstateAgencycarddiv}>
                <h4>Sand instant messages</h4>
                <div className={style.EstateAgencycarddivimage}>
                    <img src="Images/realestatesales/Email campaign-cuate.png" alt="image" />
                </div>
                <p>SMS is faster than an email and yet less intrusive than a phone call. Bottom Funnel Sales allows you to SMS your prospects and clients from within the CRM.</p>
            </div>

        </div>
        
     
    </div>
  )
}
