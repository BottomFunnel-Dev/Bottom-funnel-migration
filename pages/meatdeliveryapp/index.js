import React from "react";
import { MeatDeliveryAdmin } from "../../components/MeatDelivery/MeatDeliveryAdmin";
import { MeatDeliveryBanner } from "../../components/MeatDelivery/MeatDeliveryBanner";
import { MeatDeliveryCustomerApp } from "../../components/MeatDelivery/MeatDeliveryCustomerApp";
import { MeatDeliveryLowerBanner } from "../../components/MeatDelivery/MeatDeliveryLowerBanner";
import { MeatDeliveryPartnerApp } from "../../components/MeatDelivery/MeatDeliveryPartnerApp";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function MeatDelivery() {
  return (
    <div>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <MeatDeliveryBanner />
      <MeatDeliveryCustomerApp />
      <MeatDeliveryAdmin />
      <MeatDeliveryPartnerApp />
      <MeatDeliveryLowerBanner />

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
