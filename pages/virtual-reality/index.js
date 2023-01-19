import React from "react";

import { VRBanner } from "../../components/VRPage/VRBanner/VRBanner";
import { VRMidBanner } from "../../components/VRPage/VRMidBanner/VRMidBanner";
import { VRServices } from "../../components/VRPage/VRServices/VRServices";
import { VRwhyBF } from "../../components/VRPage/VRwhyBF/VRwhyBF";
import { VRSlider } from "../../components/VRPage/VRSlider/VRSlider";
import { VRForm } from "../../components/VRPage/VRForm/VRForm";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function VirtualReality() {
  return (
    <div>
      <Navbar />
      <VRBanner />
      <VRServices />
      <VRMidBanner />
      <VRwhyBF />
      <VRSlider />
      <VRForm />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
}
