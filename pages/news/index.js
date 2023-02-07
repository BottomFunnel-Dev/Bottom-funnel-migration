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
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";


export default function News() {
  return (
    <div>
      <Head>
        <title>News Web and App development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="A top news web app development company that can help you 
          create a news web app that is both user-friendly and informative? 
          Read on to find out more about our team, services, and portfolio."
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
      </main>
    </div>
  );
}
