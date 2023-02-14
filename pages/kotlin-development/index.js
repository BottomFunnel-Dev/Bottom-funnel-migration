import React from "react";

import { KotlinBanner } from "../../components/KotlinAppDevelopment/KotlinBanner/KotlinBanner";
import { KotlinSolutions } from "../../components/KotlinAppDevelopment/KotlinSolutions/KotlinSolutions";
import { KotlinProject } from "../../components/KotlinAppDevelopment/KotlinProject/KotlinProject";
import { KotlinIntegration } from "../../components/KotlinAppDevelopment/KotlinIntegration/KotlinIntegration";
import { WhyChooseKotlin } from "../../components/KotlinAppDevelopment/WhyChooseKotlin/WhyChooseKotlin";
import { KotlinPartner } from "../../components/KotlinAppDevelopment/KotlinPartner/KotlinPartner";
import { KotlinCards } from "../../components/KotlinAppDevelopment/KotlinCards/KotlinCards";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function KotlinAppDevelopment() {
  return (
    <>
      <Head>
        <title>Kotlin App Development Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for Kotlin app development services? Our 
       team of experienced software engineers offers 
       comprehensive Kotlin services. Read on to know 
       about our offerings."
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
        <KotlinBanner />
        <KotlinSolutions />
        <KotlinProject />
        <KotlinIntegration />
        <WhyChooseKotlin />
        <KotlinPartner />
        <KotlinCards />

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
    </>
  );
}
