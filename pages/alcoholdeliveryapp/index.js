import React from "react";
import { AlcoholBanner } from "../../components/alcohol-delivery/AlcoholBanner/AlcoholBanner";
import { alcoholLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { AlcoholBookCall } from "../../components/alcohol-delivery/AlcoholBookCall/AlcoholBookCall";
import { AlcoholSuggestions } from "../../components/alcohol-delivery/AlcoholSuggestions/AlcoholSuggestions";
import { AlcoholSolutions } from "../../components/alcohol-delivery/AlcoholSolutions/AlcoholSolutions";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "Loading..." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "Loading..." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "Loading..." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "Loading..." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "Loading..." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "Loading..." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "Loading..." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "Loading..." }
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function AlcoholDelivery() {
  return (
    <>
      <Head>
        <title> Alcohol web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="If you're looking to develop an alcohol web app and want to do it 
        the right way, then Bottom Funnel is the company for you! We offer a 
        wide range of liquor web app development solutions that will suit 
        your specific needs. Keep reading to find out more!"
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

        <AlcoholBanner />
        <Trusted partnerLogo={alcoholLogo} />
        <AlcoholBookCall />
        <AlcoholSuggestions />
        <AlcoholSolutions />

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
