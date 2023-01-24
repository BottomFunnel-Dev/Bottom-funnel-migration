import React from "react";

import GroceryBanner from "../../components/Grocery/GroceryBanner";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { groceryLogo } from "../../components/Data/SeopartnerData";
import DeliveryServices from "../../components/Grocery/DeliveryServices";
import { GroceryCustomer } from "../../components/Grocery/GroceryCustomer";
import { GroceryAdmin } from "../../components/Grocery/GroceryAdmin";
import { GroceryService } from "../../components/Grocery/GroceryService";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Grocery() {
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
      <GroceryBanner />
      <Trusted partnerLogo={groceryLogo} />
      <DeliveryServices />
      <GroceryCustomer />
      <GroceryAdmin />
      <GroceryService />

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
}
