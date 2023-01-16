import React from 'react'
import { EstateAgency } from '../RealEstateSales/EstateAgency/EstateAgency'
import { MakeYourDeal } from '../SalesPage/MakeYourDeal/MakeYourDeal'
import { SalesWorldwide } from '../SalesPage/SalesWorldwide/SalesWorldwide'
import { AgencyBanner } from './AgencyBanner/AgencyBanner'
import { AgencyNeedCrm } from './AgencyNeedCrm/AgencyNeedCrm'
import { AngencyCrm } from './AngencyCrm/AngencyCrm'
import { AutomateTask } from './AutomateTask/AutomateTask'
import { Discover } from './Discover/Discover'
import { Performing } from './Performing/Performing'


export default function AgencyHomePage() {
    return (
      <>
     <AgencyBanner/>
     <AngencyCrm/>
     <AgencyNeedCrm/>
     <Discover/>
     <AutomateTask/>
    <Performing/>

     <EstateAgency/>
        <SalesWorldwide/>
        <MakeYourDeal/>
  
       
      </>
    )
  }
