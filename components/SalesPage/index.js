import React from 'react'
import { MakeYourDeal } from './MakeYourDeal/MakeYourDeal'
import { Opportunity } from './Opportunity/Opportunity'
import { Revenue } from './Revenue/Revenue'
import { SaleSmarter } from './SaleSmarter/SaleSmarter'
import { SalesPageBanner } from './SalesPageBanner/SalesPageBanner'
import { SalesWorldwide } from './SalesWorldwide/SalesWorldwide'

export default function SalesPage() {
    return (
      <>
      <SalesPageBanner/>
        <Revenue/>
        <SaleSmarter/>
        <Opportunity/>
        
      
        < SalesWorldwide/>
       <MakeYourDeal/> 
        
  
       
      </>
    )
  }

  
  