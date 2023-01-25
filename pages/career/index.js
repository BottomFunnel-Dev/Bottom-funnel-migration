import React from "react";

import { CareerBanner } from "../../components/CareerPage/CareerBanner/CareerBanner";
import { CareerMain } from "../../components/CareerPage/CareerMain/CareerMain";
import { CareerReferral } from "../../components/CareerPage/CareerReferral/CareerReferral";
import { CarrerMidBanner } from "../../components/CareerPage/CarrerMidBanner/CarrerMidBanner";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return (
    <div style={{ color: "#393939" }}>
<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <CareerBanner />
      <CareerMain />
      <CareerReferral />
      <CarrerMidBanner />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};

export default index;
