import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { MakeYourDeal } from '../../components/SalesPage/MakeYourDeal/MakeYourDeal'
import { Opportunity } from '../../components/SalesPage/Opportunity/Opportunity'
import { Revenue } from '../../components/SalesPage/Revenue/Revenue'
import { SaleSmarter } from '../../components/SalesPage/SaleSmarter/SaleSmarter'
import { SalesPageBanner } from '../../components/SalesPage/SalesPageBanner/SalesPageBanner'
import { SalesWorldwide } from '../../components/SalesPage/SalesWorldwide/SalesWorldwide'
import { useSelector } from "react-redux";
import { SalesNavbar } from '../../components/Navbar/SalesNavbar/SalesNavbar';

export default function SalesPage() {
 

    return (
      <>
      <div style={{ color: "#393939" }}>
 
      <Navbar
        productMount={{
          navMount: true,
        }}
        navredux={{
          color: "black",
          logo: false,
        }}
      />
        <SalesNavbar  navproductredux={{
            color: "black",
            logo: false,
          }}/>

        <SalesPageBanner/>
        <Revenue/>
        <SaleSmarter/>
        <Opportunity/>
        <SalesWorldwide/>
        <MakeYourDeal/>
      </div> 
      </>
    )
  }

  
  