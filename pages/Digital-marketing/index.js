import React from "react";
import { DigitalMarketClientsAdd } from "../../components/DigitaMarketing/DigitalMarketClientsAdd";
import { DigitalMarketingBanner } from "../../components/DigitaMarketing/DigitalMarketingBanner";
import { DigitalMarketingHiring } from "../../components/DigitaMarketing/DigitalMarketingHiring";
import { DigitalmarketWhyConsider } from "../../components/DigitaMarketing/DigitalmarketWhyConsider";
import { DigitaMarketWeOffers } from "../../components/DigitaMarketing/DigitaMarketWeOffers";
import { WhatDigitalMarket } from "../../components/DigitaMarketing/WhatDigitalMarket";
<<<<<<< HEAD
import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
=======

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
>>>>>>> c00e2e7cac480fb64b1e9e5f3cb77b61d0bea368
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function DigitalMarketing() {
  return (
    <div>
      <Head>
        <title>Digital Marketing | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn how digital marketing solutions can help you 
          promote your business and reach your target 
          audience. Our guide covers key topics like planning 
          and executing a digital marketing strategy."
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
        <DigitalMarketingBanner />
        <WhatDigitalMarket />
        <DigitaMarketWeOffers />
        {/* <DigitalMarketingHiring />*/}
        <DigitalMarketClientsAdd />
        <DigitalmarketWhyConsider />

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
}
