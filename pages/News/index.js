import React from "react";
import Newspublish from "./Newspublish";
import Newstrategy from "./Newstrategy";
import { Newsintro } from "./Newsintro";
import { Newspaper } from "./Newspaper";
import { Newsfeature } from "./Newsfeature";
import { newsLogo } from "../../Data/SeopartnerData";
import Trusted from "../SEO/SeoTrustedCompanies/Seotrusted";

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

export default function News() {
  return (
    <div>
      <Newsintro />
      <Trusted partnerLogo={newsLogo} />
      <Newspaper />
      <Newsfeature />
      <Newspublish />
      <Newstrategy />
      
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
