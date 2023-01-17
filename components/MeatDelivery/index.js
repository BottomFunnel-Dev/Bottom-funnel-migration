import React from "react";
import { MeatDeliveryAdmin } from "./MeatDeliveryAdmin";
import { MeatDeliveryBanner } from "./MeatDeliveryBanner";
import { MeatDeliveryCustomerApp } from "./MeatDeliveryCustomerApp";
import { MeatDeliveryLowerBanner } from "./MeatDeliveryLowerBanner";
import { MeatDeliveryPartnerApp } from "./MeatDeliveryPartnerApp";

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

export default function MeatDelivery() {
  return (
    <div>
      <MeatDeliveryBanner />
      <MeatDeliveryCustomerApp />
      <MeatDeliveryAdmin />
      <MeatDeliveryPartnerApp />
      <MeatDeliveryLowerBanner />

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
