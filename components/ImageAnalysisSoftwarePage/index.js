import React from "react";

import { AnalysisSwBanner } from "./AnalysisSwBanner/AnalysisSwBanner";
import { AnalysisCoreTask } from "./AnalysisCoreTask/AnalysisCoreTask";
import { AnalysisOffer } from "./AnalysisOffer/AnalysisOffer";
import { AnalysisMidBanner } from "./AnalysisMidBanner/AnalysisMidBanner";
import { AnalysisWhyBF } from "./AnalysisWhyBF/AnalysisWhyBF";

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

export default function ImageAnalysisSoftware() {
  return (
    <div>
      <AnalysisSwBanner />
      <AnalysisCoreTask />
      <AnalysisOffer />
      <AnalysisMidBanner />
      <AnalysisWhyBF />

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
