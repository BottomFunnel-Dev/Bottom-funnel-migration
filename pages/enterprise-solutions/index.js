import React from 'react';

import { EnterpriseWebBanner } from '../../components/EnterpriseWebPage/EnterpriseWebBanner/EnterpriseWebBanner';
import { EnterpriseWebAnalysis } from '../../components/EnterpriseWebPage/EnterpriseWebAnalysis/EnterpriseWebAnalysis';
import { EnterpriseSupporting } from '../../components/EnterpriseWebPage/EnterpriseSupporting/EnterpriseSupporting';
import { EnterpriseWebSolutions } from '../../components/EnterpriseWebPage/EnterpriseWebSolutions/EnterpriseWebSolutions';
import { EnterpriseMidBanner } from '../../components/EnterpriseWebPage/EnterpriseMidBanner/EnterpriseMidBanner';
import { EnterpriseWhyBF } from '../../components/EnterpriseWebPage/EnterpriseWhyBF/EnterpriseWhyBF';
import { EnterpriseSlider } from '../../components/EnterpriseWebPage/EnterpriseSlider/EnterpriseSlider';
import { CustomWebForm } from '../../components/CustomisedWebPage/CustomWebForm/CustomWebForm';

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function EnterprisePage () {
  return (
    <div>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <EnterpriseWebBanner />
      <EnterpriseWebAnalysis />
      <EnterpriseSupporting />
      <EnterpriseWebSolutions />
      <EnterpriseMidBanner />
      <EnterpriseWhyBF />
      <EnterpriseSlider />
      <CustomWebForm />

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
};