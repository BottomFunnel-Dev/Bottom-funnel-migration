import React from 'react'
import style from "./CRMLogistics.module.css";

export const CRMLogistics = () => {
  return (
    <div>
        <div className={style.CRMLogisticsmaindiv}>
            <div className={style.CRMLogisticsinnerdiv}>
               <div className={style.CRMLogisticsinnerdivimage}>
                <img src="/images/logisticssalesphotos/question.png" alt="img" />
               </div>
               <div className={style.CRMLogisticsinnerdivcontain}>
                <p>
                Among these, why does customer expectation take precedence? With the global transportation industry becoming highly competitive, while affordable pricing, timely delivery, and data adoption could help your business stay competitive, what will really set it apart is its ability to deliver quality service - one that creates repeat business and builds customer loyalty.

How can companies ensure customers remain at the core of their business? By adopting a customer relationship management (CRM) software.
                </p>
               </div>
            
            </div>
            <div className={style.CRMLogisticsinnerdiv1}>
                <div>
                    <img src= "/images/logisticssalesphotos/logibannerit.png" alt="img" />
                </div>
                <div className={style.CRMLogisticsinnerdiv1contain}>
                    <h2>The needs for a Specialized CRM for Logistics </h2>
                    <p>Be it to track the progress you are making with your prospects, to measure how your business is performing, or to track your shipment status, a CRM for logistics software can ensure that you get a deeper, clearer insight into your overall business performance, while also improving speed, efficiency, and quality of customer interactions.</p>
                </div>
            </div>

        </div>
    </div>
  )
}
