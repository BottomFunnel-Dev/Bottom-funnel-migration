import React from 'react'
import styles from "./CloudIncrease.module.css"


export const CloudIncrease = () => {
  return (
    <div className={styles.cloudincreasesalesmainboxes}>
    <div className={styles.cloudincreasesalestextboxupper}>
    <h1>Increase sales efficiency with built-in <span className={styles.specialcolor}>cloud telephony</span></h1>
    <p>With the built-in cloud teephony capability in Freshsales,you can efficiently handle calls,voicemails and messages for your business;.Easily purchase virtual phone number in 90+ countries for your salespeople across offices and teams.With Freshsales your salespeople can now directly make calls from their laptops or smart devices.Monitor usage and understand your teams performance on calls with extensive analytics.</p>
    </div>
    <div className={styles.cloudincreasesalesboxflexingdiv}>
    <div className={styles.cloudincreasesalesboxflexingdivleft}>
    <h1>Win deals faster with contextual cinversations</h1>
    <p>Gain full context about your prospects with the Recent Activities widget in Freshsales.Access call logs call notes and recordings to relevantly communicate with prospects,follow up on previous conversations,etc,and improve customer experiences.You can also seamkessly transfer calls to colleagues with full context.</p>
    </div>

    <div className={styles.cloudincreasesalesboxflexingdivright}>
    <img src='Images/cloudtelephony/contextual conversations.png' alt='images' />
    </div>
    </div>
    
    </div>
  )
}
