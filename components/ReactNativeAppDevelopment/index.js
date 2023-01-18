import React from "react";

import { ReactNativeAppDevelopmentBanner } from "./ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner";
import { ReactNativeAppDevelopmentContain } from "./ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain";
import { ReactNativeDevelopmentCard } from "./ReactNativeDevelopmentCard/ReactNativeDevelopmentCard";
import { ReactNativeAppDevelopmentSolution } from "./ReactNativeAppDevelopmentSolution/ReactNativeAppDevelopmentSolution";
import { Advantages } from "./Advantages/Advantages";

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

export default function ReactNativeAppDevelopment() {
  return (
    <div>
      <ReactNativeAppDevelopmentBanner />
      <ReactNativeAppDevelopmentContain />
      <ReactNativeDevelopmentCard />
      <ReactNativeAppDevelopmentSolution />
      {/* <Advantages /> */}

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
