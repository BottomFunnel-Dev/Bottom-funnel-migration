import React from "react";
import styles from "./CloudPage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

import { CloudBanner } from "../../components/CloudPage/CloudBanner/CloudBanner";
import { CloudUnique } from "../../components/CloudPage/CloudUnique/CloudUnique";
import { CloudStats } from "../../components/CloudPage/CloudStats/CloudStats";
import { CloudOffers } from "../../components/CloudPage/CloudOffers/CloudOffers";
import { CloudWorkWithUs } from "../../components/CloudPage/CloudWorkWithUs/CloudWorkWithUs";
import { CloudSolutions } from "../../components/CloudPage/CloudSolutions/CloudSolutions";
import { CloudWhyBF } from "../../components/CloudPage/CloudWhyBF/CloudWhyBF";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: () => "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: () => "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: () => "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: () => "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: () => "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: () => "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: () => "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: () => "loading..." },
);
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"), {
  loading: () => "loading...",
  ssr: false,
});

export default function CloudPage() {
  return (
    <div className={styles.CloudPageContainer}>
      <Head>
        <title>Cloud Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to offer a cloud services offering? Our guide 
          covers key areas for successful Cloud offering
          planning, including defining your target market and 
          designing an effective value proposition"
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
        <CloudBanner />
        <CloudUnique />
        <CloudStats />
        <CloudOffers />
        <CloudWorkWithUs />
        <CloudSolutions />
        <CloudWhyBF />
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
