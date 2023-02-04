import React from "react";

import { AppBuilderSolutionBanner } from "../../components/AppBuilderSoltion/AppBuilderSolutionBanner";
import { AppBuilderDiscoverApp } from "../../components/AppBuilderSoltion/AppBuilderDiscoverApp";
import { AppBuilderWhyShuld } from "../../components/AppBuilderSoltion/AppBuilderWhyShuld";
import { AppBuilderCreate } from "../../components/AppBuilderSoltion/AppBuilderCreate";
import { AppBuilderMaker } from "../../components/AppBuilderSoltion/AppBuilderMaker";

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

export default function AppBuilderSolution () {
  return (
    <div>

      <Head>
        <title>App Builder Solutions Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering how to develop an app? Look no further, we can 
          help! We specialize in providing top-notch App Builder 
          Solutions Development services that will help you turn your
          idea into a reality."
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
      <AppBuilderSolutionBanner />
      <AppBuilderDiscoverApp />
      <AppBuilderWhyShuld />
      <AppBuilderCreate />
      <AppBuilderMaker />
      
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />

      </main>
    </div>
  );
};
