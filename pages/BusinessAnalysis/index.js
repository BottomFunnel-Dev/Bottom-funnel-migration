import React from "react";
import { BusinessAnalysisBanner } from "./BusinessAnalysisBanner";
import { BusinessAnalysisLowerBanner } from "./BusinessAnalysisLowerBanner";
import { BusinessChallenge } from "./BusinessChallenge";
import { BusinessFramework } from "./BusinessFramework";



export default function BusinessAnalysis  ()  {


  return (
    <div>
      <BusinessAnalysisBanner />
      <BusinessChallenge />
      <BusinessFramework />
      <BusinessAnalysisLowerBanner />
  


    </div>
  );
};
