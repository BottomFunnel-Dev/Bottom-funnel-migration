import React from "react";
import { OnlinePaymentAdminPannel } from './OnlinePaymentAdminPannel'
import { OnlinePaymentApplications } from './OnlinePaymentApplications'
import { OnlinePaymentAppSolutionBanner } from './OnlinePaymentAppSolutionBanner'
import { OnlinePaymentExclusive } from './OnlinePaymentExclusive'
import { OnlinePaymentWhyChoose } from './OnlinePaymentWhyChoose'
import { OnlinePMobileBrowser } from './OnlinePMobileBrowser'


export default function OnlinePaymentAppSolution ()  {

  return (

    <div>
      <OnlinePaymentAppSolutionBanner />
      <OnlinePaymentExclusive />
      <OnlinePaymentApplications />
      <OnlinePaymentAdminPannel />
      <OnlinePMobileBrowser />
      <OnlinePaymentWhyChoose />

    
    </div>
  )
}
