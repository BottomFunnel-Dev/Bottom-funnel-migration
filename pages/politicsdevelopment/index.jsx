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

    <Head>
    <title>Politics Web and App Development Company | Bottom Funnel</title>
    <meta
      name="description"
      content="Are you looking for a reliable and affordable politics web app development company that can take on your project 
      wholeheartedly? Check out our website and see for yourself how we can help!"
    />
  </Head>

  <main>
    <PoliticsAppDevelopmentbanner />

{/*    <PoliticsnewsLogo /> */}
<PoliticsApptextbox />
<Politicscustomerapp />
<Politicsadminpannel />
<PoliticsDevelopmentlowerbanner />
<PoliticsFramework />

</main>
    </div>
  )
}
