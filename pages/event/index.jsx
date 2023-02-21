import Head from 'next/head'
import React from 'react'
import CompanyLogo from '../../components/CompanyLogos/CompanyLogo'
import { Eventadminpannel } from '../../components/EventPages/Eventadminpannel'
import { Eventbanner } from '../../components/EventPages/Eventbanner'
import { Eventbest } from '../../components/EventPages/Eventbest'
import { Eventlowerbanner } from '../../components/EventPages/Eventlowerbanner'
import { Eventuserexperience } from '../../components/EventPages/Eventuserexperience'
import { Eventwhychoose } from '../../components/EventPages/Eventwhychoose'

export default function Event () {
  return (
    <div>

    <Head>
    <title>Enterprise Solutions development | Bottom Funnel</title>
    <meta
      name="description"
      content="Looking to provide your business with enterprise 
      solutions services? Our extensive portfolio of 
      offerings includes everything you need to grow your 
      business. Read on for details."
    />
  </Head>
  <main>
    <Eventbanner />
     <CompanyLogo />
     <Eventuserexperience />
     <Eventadminpannel />
     <Eventlowerbanner />
     <Eventbest />
     <Eventwhychoose />
     </main>

    </div>
  )
}
