import React from "react";

import GroceryBanner from "./GroceryBanner";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { groceryLogo } from "../Data/SeopartnerData";
import DeliveryServices from "./DeliveryServices";
import { GroceryCustomer } from "./GroceryCustomer";
import { GroceryAdmin } from "./GroceryAdmin";
import { GroceryService } from "./GroceryService";

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

export default function Grocery() {
  return (
    <div>
      <GroceryBanner />
      <Trusted partnerLogo={groceryLogo} />
      <DeliveryServices />
      <GroceryCustomer />
      <GroceryAdmin />
      <GroceryService />

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
