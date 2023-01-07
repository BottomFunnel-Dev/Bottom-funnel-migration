import React from 'react'
import style from "./InsuranceProductivity.module.css";

export const InsuranceProductivity = () => {
  return (
    <div>
     <div className={style.InsuranceProductivitymaindiv}>
        <div className={style.InsuranceProductivitymaindiv1}>
            <div  className={style.InsuranceProductivitymaindiv1image}>
                <img src="Images/InsuranceSalesphotos/Thinkingface-cuate.png" alt="" />
            </div>
            <div className={style.InsuranceProductivitymaindiv1contain}>
                <h1>But, is there room for productivity in an insurance </h1>
            <h1> sales agent’s day?</h1>
            </div>

        </div>
        <div className={style.InsuranceProductivityinnermaindiv2}>
         <div className={style.InsuranceProductivityinnermaindiv2contain}>
            <p>What does a typical work day look like for you (the insurance salesperson)? Allow us to venture a guess. It goes something like this. (Refer to the pie-chart)</p>
         <p>Now, where in all this do you find the time to nurture new clients or sustain long-lasting relationships with your existing clients? Here’s why we think this is of importance.</p>
         
         </div>
         <div className={style.InsuranceProductivityinnermaindiv2image}>
            <img src="Images/InsuranceSalesphotos/circle.png" alt="circleimage" />
         </div>
            
        </div>
     </div>
    </div>
  )
}
