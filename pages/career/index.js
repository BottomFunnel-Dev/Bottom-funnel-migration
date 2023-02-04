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
import Head from "next/head";

const index = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Career - Mobile App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Bottom Funnel is one of those companies. We are working on some of the biggest names in the industry, so you can trust us when we say that our product will be in sync with changing market demands. Our team members are intelligent and fun humans who love what they do, and they will help you build better mobile apps!"
        />
      </Head>
      <main>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: false,
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
      </main>
    </div>
  );
};

export default index;
