import React from "react";
import { AppBuilderSolutionBanner } from "../../components/AppBuilderSoltion/AppBuilderSolutionBanner";
import { AppBuilderDiscoverApp } from "../../components/AppBuilderSoltion/AppBuilderDiscoverApp";
import { AppBuilderWhyShuld } from "../../components/AppBuilderSoltion/AppBuilderWhyShuld";
import { AppBuilderCreate } from "../../components/AppBuilderSoltion/AppBuilderCreate";
import { AppBuilderMaker } from "../../components/AppBuilderSoltion/AppBuilderMaker";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "Loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "Loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "Loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "Loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "Loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "Loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "Loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "Loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
export default function AppBuilderSolution() {
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

        {/* Other react required components*/}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />*/}
        <PlanProject />
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
