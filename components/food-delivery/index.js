import React from 'react';

import { FoodDeliveryBanner } from './FoodDeliveryBanner';
import { fooddeliveryLogo } from "../Data/SeopartnerData";
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted';
import { FoodDeliveryBookCall } from './FoodDeliveryBookCall';
import { FoodDeliveryExluciveApp } from './FoodDeliveryExluciveApp';
import { FoodDeliveryAdvanceTech } from './foodDeliveryAdvanceTech';
import { FoodDeliveryAdminPanel } from './foodDeliveryAdminPanel';
import { FoodDeliveryPartnerApp } from './FoodDeliveryPartnerApp';
import { FoodDeliveryNeedSuccess } from './FoodDeliveryNeedSuccess';

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

export default function FoodDelivery () {
  return (
    <div>
        
      {<FoodDeliveryBanner />}
      <Trusted partnerLogo={fooddeliveryLogo} />
      {<FoodDeliveryBookCall />}
      {<FoodDeliveryExluciveApp />}
      {<FoodDeliveryAdvanceTech />}
      {<FoodDeliveryAdminPanel />}
      {<FoodDeliveryPartnerApp />}
      {<FoodDeliveryNeedSuccess />}
      
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