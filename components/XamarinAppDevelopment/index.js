import React from "react";

import { XamarinAppDevelopmentBanner } from "./XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinMobileDevelopment } from "./XamarinMobileDevelopment/XamarinMobileDevelopment";
import { XamarinSolutions } from "./XamarinSolutions/XamarinSolutions";
import { WhyChooseXamarin } from "./WhyChooseXamarin/WhyChooseXamarin";
import { XamarinDevelopers } from "./XamarinDevelopers/XamarinDevelopers";
import { XamarinApproach } from "./XamarinApproach/XamarinApproach";
import { XamarinDevelopmentExpertise } from "./XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";

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

export default function XamarinAppDevelopment() {
  return (
    <div>
      <XamarinAppDevelopmentBanner />
      <XamarinMobileDevelopment />
      <XamarinSolutions />
      <WhyChooseXamarin />
      <XamarinDevelopers />
      <XamarinApproach />
      <XamarinDevelopmentExpertise />
      
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
}
