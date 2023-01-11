import React from "react";

import { TaxiBookingAdminpannel } from "./TaxiBookingAdminpannel";
import { TaxiBookingBanner } from "./TaxiBookingBanner";
import { TaxiBookingCustomerApp } from "./TaxiBookingCustomerApp";
import { TaxiBookingDriver } from "./TaxiBookingDriver";
import { TaxiBookingLowerBanner } from "./TaxiBookingLowerBanner";
import { TaxiOccassion } from "./TaxiOccassion";

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

export default function TaxiBookingApp() {
  return (
    <div>
      <TaxiBookingBanner />
      <TaxiOccassion />
      <TaxiBookingCustomerApp />
      <TaxiBookingAdminpannel />
      <TaxiBookingDriver />
      <TaxiBookingLowerBanner />

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
