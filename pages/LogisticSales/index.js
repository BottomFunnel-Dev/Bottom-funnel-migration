import React from 'react'
import { CRMLogistics } from './CRMLogistics/CRMLogistics'
import { DigitalTransformation } from './DigitalTransformation/DigitalTransformation'
import { Engagement } from './Engagement/Engagement'
import { LogisticSalesBanner } from "./LogisticSalesBanner/LogisticSalesBanner"
import { LogisticsContain } from './LogisticsContain/LogisticsContain'

export default function Logistic() {
  return (
    <>
     <LogisticSalesBanner/>
    
      <LogisticsContain/> 
      <DigitalTransformation/>
      <CRMLogistics/>
      <Engagement/>
     
    </>
  )
}



