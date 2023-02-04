import React from "react";

import Cannabisoverview from "../../components/Cannabis/Cannabisoverview";
import Cannabissolution from "../../components/Cannabis/Cannabissolution";
import { Cannabiscontainer } from "../../components/Cannabis/Cannabiscontainer";
import { Cannabiscustomersection } from "../../components/Cannabis/Cannabiscustomersection";
import { Cannabisadmin } from "../../components/Cannabis/Cannabisadmin";
import { Cannabisdrive } from "../../components/Cannabis/Cannabisdrive";

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

export default function Cannabis() {
  return (

    <>
     <Head>
      <title> Cannabis web App Development
 Company | Bottom Funnel</title>
      <meta
        name="description"
        content="Wondering if cannabis Web App development is the right decision 
        for your business? Learn about the many benefits of using a 
        cannabis web App development company such as VinCard."
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
      <Cannabiscontainer />
      <Cannabissolution />
      <Cannabisoverview />
      <Cannabiscustomersection />
      <Cannabisadmin />
      <Cannabisdrive />

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
