import React from 'react'
import style from "./WhatCanYouDo.module.css";


export const WhatCanYouDo = () => {
  return (
    <div className={style.WhatCanYouDomaindiv}>
        <h1>Real Estate: What Bottom  Funnel sales can do for you </h1>
        <div className={style.WhatCanYouDoinnerdiv}>
            <h2>Engage in contextual Conversation</h2   >
            <p>Your real estate agents deal with multiple prospects at a time, each at different stages of closure. And most of your potential clients expect their realtors to act as advisors throughout the buying process. As your agents juggle multiple clients, properties, and tools, it becomes a struggle to get full context about the client’s requirements in a moment’s time.  </p>
            <p>A real estate contact management system, such as Bottom Funnel, provides a unified view of all your clients, their ongoing deals, and interactions with your company on a single panel. The AI-powered assistant, Freddy, helps your agents prioritize prospects by ranking them based on their engagement with your business. Freddy also suggests the next best actions to take to drive conversations further. Knowing who are most interested, your agents can now view</p>
       
         <ul>
            <li>Quick summary of essential information such as name, company and contact information</li>
            <li>Email and chat conversations and phone recordings with prospects</li>
            <li>A chronological view of prospects’ engagement with your business</li>
            <li>Upcoming appointments and tasks to be completed</li>
            <li>Website activities such as pages they visited and marketing material downloaded</li>
            <li>Emails and newsletters sent to them by the marketing team</li>
           
            </ul>
            <p>And more contextual information that would enable personalized conversations to drive closure.</p>
           
           
            <p className={style.WhatCanYouDomore}>Learn More</p>
            <div className={style.WhatCanYouDoimagediv}>
                <img src="Images/realestatesales/solution.png" alt="image" />
            </div>
        
       
        </div>

        <div className={style.WhatCanYouDoinnerdiv}>
            <h2>Stay on top of deals and forecast revenue accurately</h2   >
             <p>As a real estate company, you might have listings across the city or possibly the country. But each real estate project is unique in terms of location, features, pricing, and other offerings. Combining all your projects could lead to a crowded pipeline that clutters your view. It becomes difficult to prioritize, manage, and track these listings’ progress, and you could miss out on high-value deals.</p>
         <p>Bottom Funnel Sales, the premier real estate CRM, allows you to create multiple pipelines based on your preference. The AI-powered assistant, Freddy, identifies and tags deals with “Likely-to-close,” “Trending,” “At-risk,” and “Gone cold” based on recent activities. This helps your real estate agents to prioritize their pipeline better. </p>
         <p>You and your agents can get insights into every stage of the deal attached to a property, forecast sales, identify bottlenecks, and make decisions on where to focus your efforts better. </p>
         
          <p className={style.WhatCanYouDomore}>Learn More</p>
            <div className={style.WhatCanYouDoimagediv}>
                <img src="Images/realestatesales/revanue1.png" alt="image" />
            </div>
        
       
        </div>
    </div>
  )
}
