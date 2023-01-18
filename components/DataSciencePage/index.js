import React from "react";

import { DataScienceBanner } from "./DataScienceBanner/DataScienceBanner";
import { DataScienceUnique } from "./DataScienceUnique/DataScienceUnique";
import { DataScienceServices } from "./DataScienceServices/DataScienceServices";
import { DataScienceMidBanner } from "./DataScienceMidBanner/DataScienceMidBanner";
import { DataScienceBF } from "./DataScienceBF/DataScienceBF";
import { DataScienceMethods } from "./DataScienceMethods/DataScienceMethods";
import { DataScienceSlider } from "./DataScienceSlider/DataScienceSlider";
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

export default function DataScience () {
  return (
    <div>
      <DataScienceBanner />
      <DataScienceUnique />
      <DataScienceServices />
      <DataScienceMidBanner />
      <DataScienceBF />
      <DataScienceMethods />
      <DataScienceSlider />
      <CustomWebForm />
      
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
