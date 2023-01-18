import React from 'react'
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { SaaSAgency } from './SaaSAgency/SaaSAgency'
import { SaaSBusiness } from './SaaSBusiness/SaaSBusiness'
import { SaaSData } from './SaaSData/SaaSData'
import { SaaSHomePageBanner } from './SaaSHomePageBanner/SaaSHomePageBanner'
import { SaaSIndustry } from './SaaSIndustry/SaaSIndustry'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'
import { TrySalesCrm } from './TrySalesCrm/TrySalesCrm'


export default function  SaaSHomePage() {
    return (
      <>
     <SaaSHomePageBanner/>
       <SaaSIndustry/> 
       <SaaSBusiness/>
       <TrySalesCrm/>

       <SaaSData/>
       <SaaSAgency/>
       <SalesWorldwide/>
       <MakeYourDeal/>
        
  
       
      </>
    )
  }

  
 