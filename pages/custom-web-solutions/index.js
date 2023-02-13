import React from "react";
import styles from "./CustomisedWebPage.module.css";

import { CustomisedWebBanner } from "../../components/CustomisedWebPage/CustomisedWebBanner/CustomisedWebBanner";
import { CustomisedWebUnique } from "../../components/CustomisedWebPage/CustomisedWebUnique/CustomisedWebUnique";
import { CustomisedWebServices } from "../../components/CustomisedWebPage/CustomisedWebServices/CustomisedWebServices";
import { CustomWebSolutions } from "../../components/CustomisedWebPage/CustomWebSolutions/CustomWebSolutions";
import { CustomWebMidBanner } from "../../components/CustomisedWebPage/CustomWebMidBanner/CustomWebMidBanner";
import { CustomWebWhyBF } from "../../components/CustomisedWebPage/CustomWebWhyBF/CustomWebWhyBF";
import { CustomWebSlider } from "../../components/CustomisedWebPage/CustomWebSlider/CustomWebSlider";
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

export default function CustomisedWebDevelopment() {
  return (
    <div className={styles.CustomisedWebPageContainer}>
      <Head>
        <title>Custom Web Solutions Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a unique web solution to meet 
          your business needs? Custom Web Solutions 
          provides various web development services. Read 
          on to know more about our services."
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
        <CustomisedWebBanner />
        <CustomisedWebUnique />
        <CustomisedWebServices />
        <CustomWebSolutions />
        <CustomWebMidBanner />
        <CustomWebWhyBF />
        <CustomWebSlider />
        <CustomWebForm />

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
