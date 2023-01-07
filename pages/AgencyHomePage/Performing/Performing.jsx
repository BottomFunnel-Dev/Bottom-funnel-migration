import React from 'react'
import style from "./Performing.module.css";

export const Performing = () => {
  return (
    <div>
    <div className={style.Performingmaindiv}>
        <div>
            <h2>Analyze how your business is performing</h2>
            <p>Once you’ve determined whether the prospect is relevant for your business, you can move him/her to your deals pipeline, where you can track the progress made with each customer. Depending on the progress you make with them, you can move them across different deal stages such as interested to follow up or pitching to under review and more.</p>
        <p>A pipeline view also helps you determine revenue forecasts, gives insights into how each of your deals is performing, helps identify gaps in your business so you can come up with strategies to address them, and more.</p>
        <p>You can also generate daily, weekly, or monthly sales reports to draw performance insights. You can get a sector-wise breakdown of customers you’re servicing to determine where you’re getting the most business from, create a report on customers by deal stages, assess revenues each of your sales/client servicing teams is bringing in, etc. Using the reports dashboard, you can stay on top of key metrics, navigate between reports to get context and track team performance. Further, these reports can be shared and exported.

You can get a sector-wise breakdown of customers you’re servicing to determine where you’re getting the most business from, create a report on customers by deal stages, assess revenues each of your sales/client servicing teams is bringing in, and more.</p>
        <p>Learn-More</p>
        <div className={style.Performing1stdivimage}>
            <img src="/Images/Agencyhomepagephotos/screen1.png" alt="image" />
        </div>
        <div className={style.Performing2ndinnerdiv}>
            <div className={style.Performing2ndpart1}>
                <h2>Keep the conversation going</h2>
                <p>You put your heart and soul into the first few months to win that customer and sign up the project. But once you are on good terms, you tend to take a back seat because it’s nearly impossible to keep that momentum going. While this may seem natural to you, from the customer’s perspective, the ‘relationship’ starts waning.</p>
            <p>So, how do you engage with them from time to time to build trust and comfort? Like Aaron Levy, the Director of Paid Search at Elite SEM puts it, one of the key strategies to keeping clients engaged is to “be their best friends! Learn their birthdays, their kids' names and best of all, how to get their bonuses!”Of course, you can do this too in an agency CRM software with sales campaigns. Keep that communication channel always open with your customers by sending them wishes, sharing a newsletter on ideas that you worked on with other customers that became a hit and so on.</p>
            
            
            </div>

            <div className={style.Performing2ndpart2}>
                <img src="/Images/Agencyhomepagephotos/screen1.png" alt="image" />
            </div>
        </div>
        
        
        </div>
     
    </div>
    </div>
  )
}
