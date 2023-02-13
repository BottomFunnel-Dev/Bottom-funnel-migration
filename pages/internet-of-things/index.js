import React from "react";

import { IOTBanner } from "../../components/IOTPage/IOTBanner/IOTBanner";
import { IOTServices } from "../../components/IOTPage/IOTServices/IOTServices";
import { IOTMidBanner } from "../../components/IOTPage/IOTMidBanner/IOTMidBanner";
import { IOTwhyBF } from "../../components/IOTPage/IOTwhyBF/IOTwhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function IOTDevelopment() {
  return (
    <div>
      <Head>
        <title>IOT App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Building an IOT web app can be a challenging task, but our team 
          of experts is here to help you get started and achieve success.
          Learn about our top IOT Web App Development services that 
          will make your life easier!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <IOTBanner />
        <IOTServices />
        <IOTMidBanner />
        <IOTwhyBF />
        <CustomWebForm />

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
    </div>
  );
}
