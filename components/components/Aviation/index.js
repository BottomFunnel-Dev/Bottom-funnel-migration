import Head from "next/head";
import React from "react";
import { AviationAirlines } from "./AviationAirlines";
import { AviationLetsDiscuss } from "./AviationLetsDiscuss";
import { AvitaionBanner } from "./AvitaionBanner";
import { AvitaionLowerBaner } from "./AvitaionLowerBaner";



export default function Aviation() {
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


      <AvitaionBanner />
     <AviationAirlines />
     <AviationLetsDiscuss />
    <AvitaionLowerBaner />

    </main>
 

      
     {/* <StoriesSection />
      <Industries />
    
      <OndemandSection />
    
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
  */}
</div>
  );
}
