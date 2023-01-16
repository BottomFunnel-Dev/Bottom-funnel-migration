import React from 'react';

import { IOTBanner } from "./IOTBanner/IOTBanner";
import { IOTServices } from './IOTServices/IOTServices';
import { IOTMidBanner } from './IOTMidBanner/IOTMidBanner';
import { IOTwhyBF } from './IOTwhyBF/IOTwhyBF';
import { CustomWebForm } from '../CustomisedWebPage/CustomWebForm/CustomWebForm';

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

export default function IOTDevelopment() {
  return (
    <div>
        
      <IOTBanner />
      <IOTServices />
      <IOTMidBanner />
      <IOTwhyBF />
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