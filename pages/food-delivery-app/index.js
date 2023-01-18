import React from 'react';

import { FoodDeliveryBanner } from '../../components/food-delivery/FoodDeliveryBanner';
import { fooddeliveryLogo } from "../../components/Data/SeopartnerData";
import Trusted from '../../components/SEO/SeoTrustedCompanies/Seotrusted';
import { FoodDeliveryBookCall } from '../../components/food-delivery/FoodDeliveryBookCall';
import { FoodDeliveryExluciveApp } from '../../components/food-delivery/FoodDeliveryExluciveApp';
import { FoodDeliveryAdvanceTech } from '../../components/food-delivery/foodDeliveryAdvanceTech';
import { FoodDeliveryAdminPanel } from '../../components/food-delivery/foodDeliveryAdminPanel';
import { FoodDeliveryPartnerApp } from '../../components/food-delivery/FoodDeliveryPartnerApp';
import { FoodDeliveryNeedSuccess } from '../../components/food-delivery/FoodDeliveryNeedSuccess';

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";

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
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};