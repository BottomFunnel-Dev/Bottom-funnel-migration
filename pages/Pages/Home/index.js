import React, { useEffect } from "react";
import Banner from "../../mainSection/Banner";
import CompanyLogo from "../../CompanyLogos/CompanyLogo";
import Services from "../../Services/Services";
import Awards from "../../AwardSection/Awards";
import StoriesSection from "../../StoriesSection/StoriesSection";
import { Industries } from "../../CommonComponents/industries/Industries";
// import { Industries } from "../../industries/Industries";
import PlanProject from "../../PlanProject/PlanProject";
import { Companystats } from "../../CompanyStats/Companystats";
import Revamping from "../../revamping/Revamping";
import { SeoblogSection } from "../../CommonComponents/SeoBlogs/Seoblogs";
import { TextDropdown } from "../../CommonComponents/faqSection/Faqs";
import ContectForm from "../../CommonComponents/ContectForm/ContectForm";
import About from "../../AboutSection/About";
import MainFooter from "../../CommonComponents/FooterSection/MainFooter";
import OndemandSection from "../../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../../CommonComponents/PortFolioSection/PortFolio";
import { BannerFull } from "../../mainSection/BannerFull";

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <BannerFull />
      <CompanyLogo />
      <About />
      <Services />
      <Awards />
      <StoriesSection />
      <Industries />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <Companystats />
      <Revamping />
      <SeoblogSection />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};
