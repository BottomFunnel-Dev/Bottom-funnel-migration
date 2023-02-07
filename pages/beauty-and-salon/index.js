import React from "react";

import Beautycontainer from "../../components/Beautyandcare/Beautycontainer";
import { beautyLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Diversesection from "../../components/Beautyandcare/Diversesection";
import Disscus from "../../components/Beautyandcare/Disscus";
import Feature from "../../components/Beautyandcare/Feature";

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

export default function BeautyandCare() {
  return (
    <>
      <Head>
      <title>Beauty and Salon Web App Developmen Company | Bottom Funnel</title>
      <meta
        name="description"
        content="When it comes to online beauty and salon services, our team of 
        experts know just what you need! We will help you develop a web 
        app that provides an excellent user experience, is easy to use, 
        and meets all your business requirements. Contact us today to 
        learn more!"
      />
   </Head>

    <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <Beautycontainer />
      <Trusted partnerLogo={beautyLogo} />
      <Diversesection />
      <Disscus />
      <Feature />

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
    </>
  );
}
