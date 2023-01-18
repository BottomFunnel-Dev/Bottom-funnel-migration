import React from "react";

import { FlutterAppDevelopmentBanner } from "./FlutterAppDevelopmentBanner/FlutterAppDevelopmentBanner";
import { FlutterServices } from "./FlutterServices/FlutterServices";
import { WhyFlutter } from "./WhyFlutter/WhyFlutter";
import { FlutterCrossPlatform } from "./FlutterCrossPlatform/FlutterCrossPlatform";
import { FlutterAppDevelopmentDreamProject } from "./FlutterAppDevelopmentDreamProject/FlutterAppDevelopmentDreamProject";
import { FluterDevelopmentExpertise } from "./FluterDevelopmentExpertise/FluterDevelopmentExpertise";

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

export default function FlutterAppDevelopment() {
  return (
    <div>
      <FlutterAppDevelopmentBanner />
      <FlutterServices />
      <WhyFlutter />
      <FlutterCrossPlatform />
      <FlutterAppDevelopmentDreamProject />
      <FluterDevelopmentExpertise />

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
