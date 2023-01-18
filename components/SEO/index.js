import React from "react";
import { dmpagesLogo } from "../Data/SeopartnerData";

import Seosection from "./SEO section/Seosection";
import Seostats from "./Seostats/Seostats";
import Reviews from "./SeoReviews/Reviews";
import Seotrusted from "./SeoTrustedCompanies/Seotrusted";
import Trusted from "./SeoTrustedCompanies/Seotrusted";
import EnquiryNow from "./EnquiryNow/EnquiryNow";
import SeoServices from "./SeoServices/SeoServices";

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

export default function SEOMainPage() {
  return (
    <div>
      <Seosection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={dmpagesLogo} />
      <EnquiryNow />
      <SeoServices />

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
