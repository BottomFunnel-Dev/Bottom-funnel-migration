import React from 'react';

import { EnterpriseWebBanner } from './EnterpriseWebBanner/EnterpriseWebBanner';
import { EnterpriseWebAnalysis } from './EnterpriseWebAnalysis/EnterpriseWebAnalysis';
import { EnterpriseSupporting } from './EnterpriseSupporting/EnterpriseSupporting';
import { EnterpriseWebSolutions } from './EnterpriseWebSolutions/EnterpriseWebSolutions';
import { EnterpriseMidBanner } from './EnterpriseMidBanner/EnterpriseMidBanner';
import { EnterpriseWhyBF } from './EnterpriseWhyBF/EnterpriseWhyBF';
import { EnterpriseSlider } from './EnterpriseSlider/EnterpriseSlider';
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

export default function EnterprisePage () {
  return (
    <div>
         
      <EnterpriseWebBanner />
      <EnterpriseWebAnalysis />
      <EnterpriseSupporting />
      <EnterpriseWebSolutions />
      <EnterpriseMidBanner />
      <EnterpriseWhyBF />
      <EnterpriseSlider />
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