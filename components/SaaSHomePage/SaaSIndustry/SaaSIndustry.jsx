import React from 'react'
import style from "./SaaSIndustry.module.css";


export const SaaSIndustry = () => {
  return (
    <div>
      <div className={style.SaaSIndustrymaindiv}>
        <h1>Why Bottom Funnel Sales ideal for the  SaaS industry?</h1>
        <div className={style.SaaSIndustryinnermaindiv}>
            <div className={style.SaaSIndustrybox}>
                <h4>improve customer acquisition</h4>
                <div className={style.SaaSIndustryboximage}>
                    <img src="Images/SaaShomepagephotos/Generating.png" alt="img" />
                </div>
                <p>
                Capture website visitor information and understand their requirements based on what they browse and present your solution to match them.
                </p>

            </div>
            <div className={style.SaaSIndustrybox}>
                <h4>Close more deals</h4>
                <div className={style.SaaSIndustryboximage}>
                    <img src="Images/SaaShomepagephotos/Partnership-pana.png" alt="img" />
                </div>
                <p>
                Visually track your sales pipeline, and leverage built-in AI capabilities to identify the best opportunities and forecast sales accurately.                </p>

            </div>
            <div className={style.SaaSIndustrybox}>
                <h4>Increase customer retention</h4>
                <div className={style.SaaSIndustryboximage}>
                    <img src="Images/SaaShomepagephotos/CustomerSurvey-pana.png" alt="img" />
                </div>
                <p>
                Get high visibility into your customer’s journey, provide a seamless customer experience and nurture them to improve conversion rates.                </p>

            </div>

        </div>
      </div>
    </div>
  )
}
