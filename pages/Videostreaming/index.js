import React from "react";

import Videostreamingcontainer from "../../components/Videostreaming/Videostreamingcontainer";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Services from "../../components/Videostreaming/Services";
import Grow from "../../components/Videostreaming/Grow";
import Featuressection from "../../components/Videostreaming/Featuressection";
import { videostreamLogo } from "../../components/Data/SeopartnerData";

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

export default function VideoStreaming() {
  return (
    <div>
      <Head>
        <title>Video Stream App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you interested in learning more about video stream web 
          app development? Read on to learn more about our innovative 
          solutions that will help you stream your videos in the best 
          possible way!"
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
        <Videostreamingcontainer />
        <Trusted partnerLogo={videostreamLogo} />
        <Services />
        <Grow />
        <Featuressection />

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
      </main>
    </div>
  );
}
