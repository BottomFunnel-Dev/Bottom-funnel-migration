import React from "react";
import { SocialMediaAdminPannel } from "./SocialMediaAdminPannel";
import { SocialMediaApproch } from "./SocialMediaApproch";
import { SocialMediaBanner } from "./SocialMediaBanner";
import { SocialMedialLowerBanner } from "./SocialMedialLowerBanner";
import { SocialMediaSolution } from "./SocialMediaSolution";
import { SocialMediaSuggestion } from "./SocialMediaSuggestion";


export default function SocialMedia () {


  return (
    <div>
      
      <SocialMediaBanner />
      <SocialMediaSuggestion />
      <SocialMediaApproch />
      <SocialMediaSolution />
      <SocialMediaAdminPannel />
      <SocialMedialLowerBanner />
      
    </div>
  );
};
