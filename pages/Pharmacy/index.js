import React from "react";

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

import Pharmacycontainer from "./Pharmacycontainer";
import { pharmacyLogo } from "../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";
import Pharmacydelivery from "./Pharmacydelivery";
import Pharmacysneak from "./Pharmacysneak";
import Pharmacycustomer from "./Pharmacycustomer";
import Pharmacydrive from "./Pharmacydrive";
import Pharmacyadmin from "./Pharmacyadmin";

export default function Pharmacy () {
  return (
    <div>
      <Pharmacycontainer />
      <Trusted partnerLogo={pharmacyLogo} />
      <Pharmacydelivery />
      <Pharmacysneak />
      <Pharmacycustomer />
      <Pharmacydrive />
      <Pharmacyadmin />

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
