import React from "react";

import { TradingInvestingHeader } from "./TradingInvestingHeader";
import { ServicesOffer } from "./ServicesOffer";
import { WaysToGrow } from "./WaysToGrow";
import { SolutionFrame } from "./SolutionFrame";
import { SolutionFrameTwo } from "./SolutionFrameTwo";
import { WhyChooseBF } from "./WhyChooseBF";
import { TradingInvestingFooter } from "./TradingInvestingFooter";

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

export default function TradingInvestingApp () {
  return (
    <div>
      <TradingInvestingHeader />
      <ServicesOffer />
      <WaysToGrow />
      <SolutionFrame />
      {/* <SolutionFrameTwo /> */}
      <WhyChooseBF />
      {/* <TradingInvestingFooter /> */}
      
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
