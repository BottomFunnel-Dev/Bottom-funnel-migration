import React from "react";

import { KotlinBanner } from "./KotlinBanner/KotlinBanner";
import { KotlinSolutions } from "./KotlinSolutions/KotlinSolutions";
import { KotlinProject } from "./KotlinProject/KotlinProject";
import { KotlinIntegration } from "./KotlinIntegration/KotlinIntegration";
import { WhyChooseKotlin } from "./WhyChooseKotlin/WhyChooseKotlin";
import { KotlinPartner } from "./KotlinPartner/KotlinPartner";
import { KotlinCards } from "./KotlinCards/KotlinCards";

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

export default function KotlinAppDevelopment() {
  return (
    <div>
      <KotlinBanner />
      <KotlinSolutions />
      <KotlinProject />
      <KotlinIntegration />
      <WhyChooseKotlin />
      <KotlinPartner />
      <KotlinCards />

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
