import React from "react";
import { AviationAirlines } from "../../components/Aviation/AviationAirlines";
import { AviationLetsDiscuss } from "../../components/Aviation/AviationLetsDiscuss";
import { AvitaionBanner } from "../../components/Aviation/AvitaionBanner";
import { AvitaionLowerBaner } from "../../components/Aviation/AvitaionLowerBaner";

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
