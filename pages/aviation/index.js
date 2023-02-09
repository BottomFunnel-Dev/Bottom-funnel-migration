import React from "react";
import { AviationAirlines } from "../../components/Aviation/AviationAirlines";
import { AviationLetsDiscuss } from "../../components/Aviation/AviationLetsDiscuss";
import { AvitaionBanner } from "../../components/Aviation/AvitaionBanner";
import { AvitaionLowerBaner } from "../../components/Aviation/AvitaionLowerBaner";

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

export default function Aviation() {
  return (
    <div>

   <Head>
      <title>Aviation Web App development | Bottom Funnel</title>
      <meta
        name="description"
        content="Do you want to develop an aviation web app but don't know where 
        to start? Our team of experienced professionals can help you build 
        the perfect solution, tailored specifically for your business."
      />
   </Head>

<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <AvitaionBanner />
      <AviationAirlines />
      <AviationLetsDiscuss />
      <AvitaionLowerBaner />
      
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
    </div>
  );
}
