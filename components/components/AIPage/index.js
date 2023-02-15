import React from "react";

import { AIBanner } from "./AIBanner/AIBanner";
import { AIServices } from "./AIServices/AIServices";
import { AIMidBanner } from "./AIMidBanner/AIMidBanner";
import { AIwhyBF } from "./AIwhyBF/AIwhyBF";
import { AITech } from "./AITech/AITech";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

export default function ArtifficialIntelligence () {
  return (
    <div>
      <AIBanner />
      <AIServices />
      <AIMidBanner />
      <AIwhyBF />
      <AITech />
      <CustomWebForm />
      
      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
};