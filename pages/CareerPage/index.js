import React from "react";
import { CareerBanner } from "./CareerBanner/CareerBanner";
import { CareerMain } from "./CareerMain/CareerMain";
import { CareerReferral } from "./CareerReferral/CareerReferral";
import { CarrerMidBanner } from "./CarrerMidBanner/CarrerMidBanner";

export default function CareerPage ()  {
 

  return (
    <div style={{ color: "#393939" }}>
  
        <CareerBanner />
        <CareerMain />
         <CareerReferral />
       <CarrerMidBanner />


      {/* ----- End of main page. Now Further components ----- */}
     {/* <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />

  */}
    </div>
  );
};
