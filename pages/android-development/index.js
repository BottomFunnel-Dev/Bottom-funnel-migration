import React from "react";
import { AndriodBanner } from "../../components/AndriodAppDevelopment/AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "../../components/AndriodAppDevelopment/AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "../../components/AndriodAppDevelopment/AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "../../components/AndriodAppDevelopment/AndriodServices/AndriodServices";
import { AndriodUserCentric } from "../../components/AndriodAppDevelopment/AndriodUserCentric/AndriodUserCentric";

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

export default function AndroidAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Best android app development services company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom funnel, android app development, app development,  Android App UX/UI Design development,
        bottom funnel app development services, Android App Programming,  Native & Hybrid Android App Development, 
        App Development for Android Watch and Wearable Devices."
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
        <AndriodBanner />
        <AndriodServices />
        <AndriodCustomDevelopment />
        <AndriodUserCentric />
        <AndriodBottomFunnel />

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
