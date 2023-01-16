import React from 'react'
import style from "./TailorBusiness.module.css";


export const TailorBusiness = () => {
  return (
    <div>
      <div className={style.TailorBusinessmaindiv}>
        
        <div className={style.TailorBusinessinnerdiv}>
            <h2>Tailor for your business</h2>
       <p>As your company grows with the ever-expanding list of properties, you need a real estate CRM that grows with you. Bottom Funnel Sales allows you to truly make it your own by creating custom modules—a dedicated space to capture and track information about your business solutions.</p>
      
           
           
            <p className={style.TailorBusinessmore}>Learn More</p>
            <div className={style.TailorBusinessimagediv}>
                <img src="Images/realestatesales/tailor.png" alt="image" />
            </div>
        
       
        </div>

        <div className={style.TailorBusinessinnerdiv}>
            <h2>Capture clients into the CRM automatically</h2>
            <p>Your prospects may pour in from different channels. While some may browse through your website for properties and chat with your realtors, some may just fill-up a form or write an email asking for more information. </p>
         <p>Manage prospects from different sources on a real estate CRM software, like Bottom Funnel Sales, that automatically captures the clients’ information. Once the leads are captured, their social and public information are auto-enriched. Now your agents can directly jump into action, armed with the primary information they need.</p>
          <p>Bottom Funnel Sales  real estate CRM can also auto-assign your prospects to the right agent based on the geography, lead source, etc., in a fair and round-robin fashion. Now, you do not only get rid of manually assigning leads, but you can also boost your lead response time.</p>
          <p className={style.TailorBusinessmore}>Learn More</p>
            <div className={style.TailorBusinessimagediv}>
                <img src="Images/realestatesales/cpture.png" alt="image" />
            </div>
        
       
        </div>
    </div>
    </div>
  )
}
