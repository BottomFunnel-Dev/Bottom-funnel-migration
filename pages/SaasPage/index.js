import React from 'react'

import { Saasbanner } from './Saasbanner/Saasbanner';
import { SaasExpetise } from './SaasExpetise/SaasExpetise';
import { SaasSuite } from './SaasSuite/SaasSuite';
import { SaasValuable } from './SaasValuable/SaasValuable';
import { SaasStrategy } from './SaasStrategy/SaasStrategy';

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

export default function SaasPage () {
  return (
    <div>
        
      <Saasbanner />
      <SaasExpetise />
      <SaasSuite />
      <SaasValuable />
      <SaasStrategy />
      
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