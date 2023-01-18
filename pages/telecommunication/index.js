import React from "react";

import { TelecommunicationsHeader } from "../../components/Telecommunications/Telecommunications-Header/TelecommunicationsHeader";
import { TelecommunicationsCustomerApp } from "../../components/Telecommunications/TelecommunicationsCustomerApp/TelecommunicationsCustomerApp";
import { TelecommunicationsFooter } from "../../components/Telecommunications/Telecommunications-Footer/TelecommunicationsFooter";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";

export default function Telecommunication() {
  return (
    <div>
      <TelecommunicationsHeader />
      <TelecommunicationsCustomerApp />
      <TelecommunicationsFooter />

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
