import React from "react";
import { TrendingTechnologyBanner } from "./TrendingTechnologyBanner";
import { TrendingTechnologyService } from "./TrendingTechnologyService";
import { TrendingTechnologyLowerBanner } from "./TrendingTechnologyLowerBanner";
import { TrendingWhyChoose } from "./TrendingWhyChoose";

export default function TrendingTech () {
  return (
    <div>
      <TrendingTechnologyBanner />
     <TrendingTechnologyService />
      <TrendingTechnologyLowerBanner />
        <TrendingWhyChoose />
 
 

      {/*<StoriesSection />
      <Industries />
     <PlanProject />
      <OndemandSection />
       <PortFolio />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
    <MainFooter /> */}


    </div>
  );
};
