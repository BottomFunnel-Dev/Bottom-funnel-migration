import React from "react";
import SeoguestSection from "../../components/Seoguest/SeoguestSection";
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

export default function SeoGuest() {
  return (
    <div>

      <Head>
        <title>SEO Guest Post | Bottom Funnel </title>
        <meta
          name="description"
          content="Looking to get exposure for your website or blog by 
          writing SEO guest posts for various search 
          engines? Here are some top SEO guest post 
          companies that offer reliable and budget-friendly
          options."
        />
      </Head>

      <main>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <SeoguestSection />
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
