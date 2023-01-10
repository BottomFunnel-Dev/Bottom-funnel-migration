import React from "react";

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

import { AlcoholBanner } from "./AlcoholBanner/AlcoholBanner";
import { alcoholLogo } from "../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { AlcoholBookCall } from "./AlcoholBookCall/AlcoholBookCall";
import { AlcoholSuggestions } from "./AlcoholSuggestions/AlcoholSuggestions";
import { AlcoholSolutions } from "./AlcoholSolutions/AlcoholSolutions";

export default function AlcoholDelivery() {
  return (
    <div>

      <AlcoholBanner />
      <Trusted partnerLogo={alcoholLogo} />
      <AlcoholBookCall />
      <AlcoholSuggestions />
      <AlcoholSolutions />

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
