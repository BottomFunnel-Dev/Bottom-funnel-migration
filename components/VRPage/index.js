import React from "react";

import { VRBanner } from "./VRBanner/VRBanner";
import { VRMidBanner } from "./VRMidBanner/VRMidBanner";
import { VRServices } from "./VRServices/VRServices";
import { VRwhyBF } from "./VRwhyBF/VRwhyBF";
import { VRSlider } from "./VRSlider/VRSlider";
import { VRForm } from "./VRForm/VRForm";

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

export default function VirtualReality() {
  return (
    <div>
      <VRBanner />
      <VRServices />
      <VRMidBanner />
      <VRwhyBF />
      <VRSlider />
      <VRForm />

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
