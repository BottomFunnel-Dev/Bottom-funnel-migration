import React from "react";

import Pharmacycontainer from "../../components/Pharmacy/Pharmacycontainer";
import { pharmacyLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Pharmacydelivery from "../../components/Pharmacy/Pharmacydelivery";
import Pharmacysneak from "../../components/Pharmacy/Pharmacysneak";
import Pharmacycustomer from "../../components/Pharmacy/Pharmacycustomer";
import Pharmacydrive from "../../components/Pharmacy/Pharmacydrive";
import Pharmacyadmin from "../../components/Pharmacy/Pharmacyadmin";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function Pharmacy() {
  return (
    <div>
      <Navbar />
      <Pharmacycontainer />
      <Trusted partnerLogo={pharmacyLogo} />
      <Pharmacydelivery />
      <Pharmacysneak />
      <Pharmacycustomer />
      <Pharmacydrive />
      <Pharmacyadmin />

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
