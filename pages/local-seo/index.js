import React from "react";
import Seostats from "../../components/SEO/Seostats/Seostats";
import { SeoLocalSection } from "../../components/SeoLocalServices/SeoLocalSection";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
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

export default function LocalSEO() {
  return (
    <div>

      <Head>
        <title>Local SEO Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Need some local SEO services for your business? 
          We've got you covered. Our range of reliable and 
          effective SEO services include organic search 
          engine optimization, PPC campaigns, website 
          optimization, and much more. Check them out!"
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
      <SeoLocalSection />
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
