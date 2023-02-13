import React from "react";
import { AndriodBanner } from "../../components/AndriodAppDevelopment/AndriodBanner/AndriodBanner";
import { AndriodBottomFunnel } from "../../components/AndriodAppDevelopment/AndriodBottomFunnel/AndriodBottomFunnel";
import { AndriodCustomDevelopment } from "../../components/AndriodAppDevelopment/AndriodCustomDevelopment/AndriodCustomDevelopment";
import { AndriodServices } from "../../components/AndriodAppDevelopment/AndriodServices/AndriodServices";
import { AndriodUserCentric } from "../../components/AndriodAppDevelopment/AndriodUserCentric/AndriodUserCentric";

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

export default function AndroidAppDevelopment() {
  return (
    <>
      <Head>
        <title>
          Best android app development services company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Get started with Android app development and create innovative, top-quality apps for mobile devices. Our comprehensive guide covers every aspect of developing for Android"
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
