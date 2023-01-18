import React from 'react'
import style from "./TheSolution.module.css";

export const TheSolution = () => {
  return (
    <div className={style.TheSolutionmaindiv}>
        <p>
        Your real estate property clients have unique requirements while hunting for their perfect space.

To ensure a smooth customer experience for them, your realtors must not only understand their needs but must also be in sync at all times. But if your realtors are using five different software to carry out their daily work and track data, it could cause internal data silos and unorganized data. 

At the end of the day, the customer experience is broken, and you don’t have the clarity needed to make smart, revenue-boosting decisions. 
        </p>
        <div className={style.TheSolutiondiv}>
            <div className={style.TheSolutionimagediv }>
             <img src="Images/realestatesales/Lightbulb-pana.png" alt="image" />
            </div>
            <div className={style.TheSolutioncontaindiv}>
            <h3>The Solution</h3>
            <p>Bottom Funnel Sales keeps your sales teams in-the-know about the entire contact lifecycle, from click to close, on a single platform. You can now identify which source brings you the best quality leads, maximize your efforts, and attribute your ROI to the right source every time.</p>
            </div>
        </div>
    </div>
  )
}
