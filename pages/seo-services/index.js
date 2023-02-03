import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";

import Seosection from "../../components/SEO/SEO section/Seosection";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seotrusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import EnquiryNow from "../../components/SEO/EnquiryNow/EnquiryNow";
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

export default function SEOMainPage() {
  return (
    <div>
      
      <Head>
        <title> SEO Services | Bottom Funnel </title>
        <meta
          name="description"
          content="Want to improve your SEO rankings and drive more
          traffic to your website? We've got the best SEO 
         services solutions for you. Read on to know!."
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
      <Seosection />
      <Seostats />
      <Reviews />
      {/* <Seotrusted /> */}
      <Trusted partnerLogo={dmpagesLogo} />
      <EnquiryNow />
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
