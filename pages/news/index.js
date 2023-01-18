import React from "react";
import Newspublish from "../../components/News/Newspublish";
import Newstrategy from "../../components/News/Newstrategy";
import { Newsintro } from "../../components/News/Newsintro";
import { Newspaper } from "../../components/News/Newspaper";
import { Newsfeature } from "../../components/News/Newsfeature";
import { newsLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
  
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
