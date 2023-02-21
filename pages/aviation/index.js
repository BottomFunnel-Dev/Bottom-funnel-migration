import React from 'react'
import Head from 'next/head'
import AviationAdmin from '../../components/Aviationp/AviationAdmin'
import AviationBannerone from '../../components/Aviationp/AviationBannerone'
import AviationCustomer from '../../components/Aviationp/AviationCustomer'
import AviationDevProcess from '../../components/Aviationp/AviationDevProcess'
import AviationLower from '../../components/Aviationp/AviationLower'
import AviationService from '../../components/Aviationp/AviationService'
import { AviationWhy } from '../../components/Aviationp/AviationWhy'

export default function AviationNew () {
  return (
    <div>

  <Head>
    <title>Aviation Softwere Development Services | Bottom Funnel</title>
    <meta
      name="description"
      content="Looking for professional aviation 
      software development services? Look no 
      further than Aviation Softwere Development 
      Services. Our team of experts has years of 
      experience in developing top-notch aviation 
      software."
    />
  </Head>

    <main>
      <AviationBannerone/>
      <AviationService/>
      <AviationCustomer/>
      <AviationAdmin/>
      <AviationDevProcess/>
      <AviationLower/>
      <AviationWhy/>
    </main>
    </div>
  )
}
