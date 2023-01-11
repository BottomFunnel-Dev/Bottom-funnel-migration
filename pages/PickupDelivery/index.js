import React from "react";

import { PickupBanner } from "./PickupBanner";
import { pickupanddeliveryLogo } from "../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import { PickupSolutions } from "./PickupSolutions";
import { Pickuprequire } from "./Pickuprequire";
import { PickupCustomer } from "./PickupCustomer";
import { Pickupdriveapp } from "./Pickupdriveapp";
import { Pickupadmin } from "./Pickupadmin";
import { PickupLowerBanner } from "./PickupLowerBanner";

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

export default function PickupDelivery() {
  return (
    <div>
      <PickupBanner />
      <Trusted partnerLogo={pickupanddeliveryLogo} />
      <PickupSolutions />
      <Pickuprequire />
      <PickupCustomer />
      <Pickupdriveapp />
      <Pickupadmin />
      <PickupLowerBanner />

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
