import React from 'react'
import { PoliticsAppDevelopmentbanner } from '../../components/PoliticsAppDevelopment/PoliticsAppDevelopmentbanner'
import { Politicsadminpannel } from './Politicsadminpannel'
import { PoliticsApptextbox } from './PoliticsApptextbox'
import { Politicscustomerapp } from './Politicscustomerapp'
import { PoliticsDevelopmentlowerbanner } from './PoliticsDevelopmentlowerbanner'
import PoliticsnewsLogo from './PoliticsDevelopmentnews'
import { PoliticsFramework } from './PoliticsFramework'
import { Politicsnewsheading } from './Politicsnewsheading'


export default function PoliticsAppDevelopment ()  {
  return (
    <div>
    <PoliticsAppDevelopmentbanner />

{/*    <PoliticsnewsLogo /> */}
<PoliticsApptextbox />
<Politicscustomerapp />
<Politicsadminpannel />
<PoliticsDevelopmentlowerbanner />
<PoliticsFramework />
    </div>
  )
}
