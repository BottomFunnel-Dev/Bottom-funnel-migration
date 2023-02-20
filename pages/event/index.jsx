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
    <Eventbanner />
     <CompanyLogo />
     <Eventuserexperience />
     <Eventadminpannel />
     <Eventlowerbanner />
     <Eventbest />
     <Eventwhychoose />


    </div>
  )
}
