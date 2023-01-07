import React from 'react'
import style from "./AccessData.module.css";

export const AccessData = () => {
  return (
    <div  className={style.AccessDatamaindiv}>
     <div className={style.AccessDatainnerdiv1}>
        <h1>Access client data on the move</h1>
        <p>A typical day in a realtor’s life requires him/her to be on the move, even while responding to phone calls, sending emails, and attending open houses.</p>
        <p>CRM that is also available as a mobile application that can help your agents be more productive.</p>
        <p>Bottom Funnel sales comes with an iOS and Android mobile app that allows realtors to:</p>
        <ul>
            <li>Know what properties and prospects to focus on each day</li>
            <li>Stay up to date with real-time push notifications</li>
            <li>Filter prospects by last contacted time, activity type, and more</li>
            <li>Check-in at sales meetings and open houses to confirm their presence and keep the team in the loop</li>
            <li>Add voice notes, and create tasks and appointments.</li>
            <li>Book an Uber to the meetings.</li>
           

        </ul>
        <p>All of this right from within the mobile real estate CRM.</p>

        <p>Any change on the mobile app automatically syncs with the web application, so you can be assured that your information will always be up to date.</p>
        </div> 
        <div className={style.AccessDatainnerdiv2}>
            <img src="/Images/realestatesales/access.png" alt="image" />
            </div>  
    

    </div>
  )
}
