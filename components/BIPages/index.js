import React from "react";

import { BIBanner } from "./BIBanner/BIBanner";
import { BIPartner } from "./BIPartner/BIPartner";
import { BISolutions } from "./BISolutions/BISolutions";
import { BIWhyBF } from "./BIWhyBF/BIWhyBF";
import { BIAnalytics } from "./BIAnalytics/BIAnalytics";
import { BISlider } from "./BISlider/BISlider";
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

export default function  BusinessIntelligence() {
  return (
    <div>
      <BIBanner />
      <BIPartner />
      <BISolutions />
      <BIWhyBF />
      <BIAnalytics />
      <BISlider />
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
