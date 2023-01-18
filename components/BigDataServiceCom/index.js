import React from "react";

import { BigDataServiceBanner } from "./BigDataServiceBanner/BigDataServiceBanner";
import { BigDataServicePopular } from "./BigDataServicePopular/BigDataServicePopular";
import { BigDataServiceHandling } from "./BigDataServiceHandling/BigDataServiceHandling";
import { BigDataServiceBF } from "./BigDataServiceBF/BigDataServiceBF";
import { CustomWebForm } from "./BigDataServiceForm/BigDataServiceForm";

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

export default function BigDataService() {
  return (
    <div>
      <BigDataServiceBanner />
      <BigDataServicePopular />
      <BigDataServiceHandling />
      <BigDataServiceBF />
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
};