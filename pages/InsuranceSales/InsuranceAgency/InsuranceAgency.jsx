import React from 'react'
import style from "./InsuranceAgency.module.css";


export const InsuranceAgency = () => {
  return (
    <div className={style.InsuranceAgencymaindiv}>
        <h1>Do all of this and more with Bottom Funnel Sales</h1>
        <div className={style.InsuranceAgencyinnerdiv}>
        <div className={style.InsuranceAgencycarddiv}>
                <h4>Stay on top of your sales game </h4>
                <div className={style.InsuranceAgencycarddivimage}>
                    <img src="Images/InsuranceSalesphotos/Documents1.png" alt="image" />
                </div>
                <p>Even when you’re away from your desk, get a holistic view of all your leads, accounts, deals, and contacts on your smartphone with theBottom Funnel Sales' Android or iPhone mobile app.</p>
            </div>
            <div className={style.InsuranceAgencycarddiv}>
                <h4>Access multiple integrations</h4>
                <div className={style.InsuranceAgencycarddivimage}>
                    <img src="Images/InsuranceSalesphotos/Securedata-cuate.png" alt="image" />
                </div>
                <p>Generate higher revenues by integrating theBottom Funnel Sales software with other business tools such as Google Calendar, Zapier, MailChimp, or Hubspot.</p>
            </div>
            <div className={style.InsuranceAgencycarddiv}>
                <h4>Compare performance reports</h4>
                <div className={style.InsuranceAgencycarddivimage}>
                    <img src="Images/InsuranceSalesphotos/Emailcampaign.png" alt="image" />
                </div>
                <p>View multiple reports on a single panel with the reports dashboard. Create your own or use the pre-existing templates on theBottom Funnel Sales platform and share them with your team.</p>
            </div>

        </div>
        
     
    </div>
  )
}
