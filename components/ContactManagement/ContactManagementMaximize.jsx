import React from 'react'
import styles from "./ContactManagementMaximize.module.css"

export const ContactManagementMaximize = () => {

const contactmanagementmax = [
{
    htxt:"Convert email to contacts",
    stxt:"forward sales emails from your inbox by sending them to CRM's custom email address and automatically convert them into contacts(prospects) that you can follow up with.",
    icon:"Images/contactmanagement/convert emails.png",
},

{
    htxt:"Prioritize Prospects",
    stxt:"With AI-based contacts scoring identify your hottest prospects based on their activities previous engagement send personalized outreach and close deals faster.",
    icon:"Images/contactmanagement/priortize prospects.png",
},

{
    htxt:"Run successful campaigns",
    stxt:"Deliver personalized campaigns based on your contacts behavior and follow up in their responses from within the CRM Engage with your prospects contextually deliver value and win more deals.",
    icon:"Images/contactmanagement/successful campaigns.png",
},

{
    htxt:"Set up internal alerts",
    stxt:"Set up alerts if your prospects have performed specific actions on your product/website like sending a support ticket visiting a pricing page,etc and engage with them at the right time.",
    icon:"Images/contactmanagement/Notification.png",
},

{
    htxt:"Provide unified experiences",
    stxt:"With the customer-for-life cloud gain insights about the different marketing touchpoints your prospects experienced Engage contextualy and provide delightful experiences.",
    icon:"Images/contactmanagement/experience 1.png",
},
]



  return (
    <div className={styles.contactmanagementmaximizesales}>
    <h1>Maximize your sales team's efficiency</h1>
    <p>Track your contact's buying information and behavior in real-time,personalize your outreach and improve conversion and win rates
    </p>
    <div className={styles.contactmanagementmaximizemapperdata}>{contactmanagementmax.map((e)=>{
        return (
            <div className={styles.contactmanagementflexboxresizer}>
            <div className={styles.contactmgmticonbox}>
            <img src={e.icon} alt={e.htxt} />
            </div>
            <div>
            <h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
            </div>
        )
    })}</div>

    
    </div>
  )
}
