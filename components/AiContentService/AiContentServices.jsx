import React from "react";
import { AIContentApplication } from './AIContentApplication'

import { AiContentBanner } from './AiContentBanner'
import { AiContentHuman } from './AiContentHuman'
import { AiContentTextOnly } from './AiContentTextOnly'
import { AiHowDoesWorks } from './AiHowDoesWorks'

// ----- Other requried react components -----
import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";


export const AiContentServices = () => {
  return (
    <div>
    <AiContentBanner  />
    <AiContentHuman />
    <AiHowDoesWorks />
    <AIContentApplication />
    <AiContentTextOnly />

  {/* Other react required components */}
  <StoriesSection />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    
    </div>
  )
}

