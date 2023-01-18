import React from "react";

import { MLBanner } from "./MLBanner/MLBanner";
import { MLPopular } from "./MLPopular/MLPopular";
import { MLMidBanner } from "./MLMidBanner/MLMidBanner";
import { MLApproach } from "./MLApproach/MLApproach";
import { MLwhyBF } from "./MLwhyBF/MLwhyBF";
import { CustomWebForm } from "../CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function MachineLearning() {
  return (
    <div>
      <MLBanner />
      <MLPopular />
      <MLMidBanner />
      <MLApproach />
      <MLwhyBF />
      {/* <CustomWebForm /> */}
      
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
