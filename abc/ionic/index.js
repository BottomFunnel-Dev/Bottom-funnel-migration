import React from "react";
import { IonicAppBanner } from "../../components/IonicAppDevelopment/IonicAppBanner/IonicAppBanner";
import { IonicBottomFunnel } from "../../components/IonicAppDevelopment/IonicBottomFunnel/IonicBottomFunnel";
import { IonicServices } from "../../components/IonicAppDevelopment/IonicServices/IonicServices";
import { WhyChooseIonic } from "../../components/IonicAppDevelopment/WhyChooseIonic/WhyChooseIonic";
import { IonicCrossPlatform } from "../../components/IonicAppDevelopment/IonicCrossPlatform/IonicCrossPlatform";
import { WhyChooseIonicBottomFunnel } from "../../components/IonicAppDevelopment/WhyChooseIonicBottomFunnel/WhyChooseIonicBottomFunnel";
import { IonicProject } from "../../components/IonicAppDevelopment/IonicProject/IonicProject";
import { IonicDevelopmentExpertise } from "../../components/IonicAppDevelopment/IonicDevelopmentExpertise/IonicDevelopmentExpertise";

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

export default function IonicAppDevelopment() {
  return (
    <>
      <Head>
        <title>Ionic App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for the best Ionic app development company in India? Hire BottomFunnel's ionic developer to build feature-rich, highly functional and customized ionic applications"
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
        <IonicAppBanner />
        <IonicBottomFunnel />
        <IonicServices />
        <WhyChooseIonic />
        <IonicCrossPlatform />
        <WhyChooseIonicBottomFunnel />
        <IonicProject />
        <IonicDevelopmentExpertise />

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
