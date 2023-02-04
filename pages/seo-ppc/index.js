import React from "react";
import SeoPPCSection from "../../components/SeoPPC/SeoPPCSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

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

export default function SEOPPC() {
  return (
    <div>
      
      <Head>
        <title>SEO PPC | Bottom Funnel </title>
        <meta
          name="description"
          content="Are you looking to get your business ahead in the 
          competitive PPC search engine market? Our SEO 
          PPC solutions can help. Read on to find out."
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
      <SeoPPCSection />
      <Seostats />
      <Reviews />
      <Trusted partnerLogo={dmpagesLogo} />
      <SeoServices />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      {/* <PlanProject />  */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
      </main>
    </div>
  );
}
