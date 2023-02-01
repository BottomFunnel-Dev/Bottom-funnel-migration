import React from "react";

import { TelecommunicationsHeader } from "../../components/Telecommunications/Telecommunications-Header/TelecommunicationsHeader";
import { TelecommunicationsCustomerApp } from "../../components/Telecommunications/TelecommunicationsCustomerApp/TelecommunicationsCustomerApp";
import { TelecommunicationsFooter } from "../../components/Telecommunications/Telecommunications-Footer/TelecommunicationsFooter";

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

export default function Telecommunication() {
  return (
    <div>
      <Head>
        <title>Telecommunication Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and cost-effective telecommunication 
        web app development company? Look no further than ours! We 
        offer a wide range of innovative and cost-effective solutions that 
        will help you get your business online."
        />
      </Head>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <TelecommunicationsHeader />
      <TelecommunicationsCustomerApp />
      <TelecommunicationsFooter />

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
