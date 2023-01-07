import React from 'react'
import { FinanceContaint } from './FinanceContaint/FinanceContaint'
import { FinanceHomePageBanner } from './FinanceHomePageBanner/FinanceHomePageBanner'
import { FinancePerforming } from './FinancePerforming/FinancePerforming'
import { FinanceTask } from './FinanceTask/FinanceTask'


export default function FinanceHomePage() {
    return (
      <>
     <FinanceHomePageBanner/>
     <FinanceContaint/>
     <FinanceTask/>
     <FinancePerforming/>

  
       
      </>
    )
  }

 
  