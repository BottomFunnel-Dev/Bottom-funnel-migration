import React from "react";

import { TaxiBookingAdminpannel } from "../../components/TaxiBookingApp/TaxiBookingAdminpannel";
import { TaxiBookingBanner } from "../../components/TaxiBookingApp/TaxiBookingBanner";
import { TaxiBookingCustomerApp } from "../../components/TaxiBookingApp/TaxiBookingCustomerApp";
import { TaxiBookingDriver } from "../../components/TaxiBookingApp/TaxiBookingDriver";
import { TaxiBookingLowerBanner } from "../../components/TaxiBookingApp/TaxiBookingLowerBanner";
import { TaxiOccassion } from "../../components/TaxiBookingApp/TaxiOccassion";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function TaxiBookingApp() {
  return (
    <div>
      <Navbar />
      <TaxiBookingBanner />
      <TaxiOccassion />
      <TaxiBookingCustomerApp />
      <TaxiBookingAdminpannel />
      <TaxiBookingDriver />
      <TaxiBookingLowerBanner />

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
