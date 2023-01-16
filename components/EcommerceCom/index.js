import React from "react";

import { EcommerceComBanner } from "./EcommerceComBanner/EcommerceComBanner";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { EcommerceLogo } from "../Data/SeopartnerData";
import { EcommerceComFeatures } from "./EcommerceComFeturesSolutions/EcommerceComFeatures";
import { EcommerceComCustomer } from "./EcommerceComAdvance/EcommerceComCustomer";
import { EcommerceComAdminPanel } from "./EcommerceComAdvance/EcommerceComAdminPanel";
import { EcommerceComShopping } from "./EcommerceComAdvance/EcommerceComShopping";
import { EcommerceBookCall } from "./EcommerceBookCall/EcommerceBookCall";
import { EcommerceComSolutions } from "./EcommerceComFeturesSolutions/EcommerceComSolutions";

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

export default function Ecommerce () {
  return (
    <div>
      <EcommerceComBanner />
      <Trusted partnerLogo={EcommerceLogo} />
      <EcommerceComFeatures />
      <EcommerceComCustomer />
      {/* <EcommerceComAdminPanel /> */}
      <EcommerceComShopping />
      <EcommerceBookCall />
      <EcommerceComSolutions />
      
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
