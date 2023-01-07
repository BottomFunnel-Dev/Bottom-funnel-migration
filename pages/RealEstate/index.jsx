import React from 'react'
import { RealEstateBanner } from './RealEstateBanner'
import { RealEstateNextBanner } from './RealEstateNextBanner';
import { RealEstateSolution } from './RealEstateSolution';
import { RealEstateCustomer } from './RealEstateCustomer';
import { RealEstateAdminPannel } from './RealEstateAdminPannel';
import { RealEstateDriver } from './RealEstateDriver';
import { Realestatelowerbanner } from './Realestatelowerbanner';
import { Realestatewhychoose } from './Realestatewhychoose';


export default function RealEstate  ()  {


  return (
    <div>
    <RealEstateBanner />
    <RealEstateNextBanner />
    <RealEstateSolution />
    <RealEstateCustomer />
    <RealEstateAdminPannel />
    <RealEstateDriver />
    <Realestatelowerbanner />
    <Realestatewhychoose />

    </div>
  )
}
