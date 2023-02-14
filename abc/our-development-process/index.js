import React from "react";
import styles from "./OurDevPage.module.css";
import { OurDevBanner } from "../../components/OurDevPage/OurDevBanner/OurDevBanner";
import { OurDevProcess } from "../../components/OurDevPage/OurDevProcess/OurDevProcess";
import { OurWholeDev } from "../../components/OurDevPage/OurWholeDev/OurWholeDev";
import { OurDevQuery } from "../../components/OurDevPage/OurDevQuery/OurDevQuery";

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

export default function OurDevelopment() {
  return (
    <div className={styles.ourDevPageContainer}>
      <Head>
        <title>
          Our Development Process and Working Methodology | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Bottom Funnel has evolved from a humble beginning as an IT service provider to a leading global software company with widespread presence across the globe."
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
        <OurDevBanner />
        <OurDevProcess />
        <OurWholeDev />
        <OurDevQuery />

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
