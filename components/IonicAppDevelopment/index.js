import React from "react";
import { IonicAppBanner } from "./IonicAppBanner/IonicAppBanner";
import { IonicBottomFunnel } from "./IonicBottomFunnel/IonicBottomFunnel";
import { IonicServices } from "./IonicServices/IonicServices";
import { WhyChooseIonic } from "./WhyChooseIonic/WhyChooseIonic";
import { IonicCrossPlatform } from "./IonicCrossPlatform/IonicCrossPlatform";
import { WhyChooseIonicBottomFunnel } from "./WhyChooseIonicBottomFunnel/WhyChooseIonicBottomFunnel";
import { IonicProject } from "./IonicProject/IonicProject";
import { IonicDevelopmentExpertise } from "./IonicDevelopmentExpertise/IonicDevelopmentExpertise";

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

export default function IonicAppDevelopment() {
  return (
    <div>
      <IonicAppBanner />
      <IonicBottomFunnel />
      <IonicServices />
      <WhyChooseIonic />
      <IonicCrossPlatform />
      <WhyChooseIonicBottomFunnel />
      <IonicProject />
      <IonicDevelopmentExpertise />
            
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
