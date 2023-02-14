import React from "react";
import styles from "./VettingPage.module.css";

import { VettingBanner } from "../../components/VettingPage/VettingBanner/VettingBanner";
import { VettingProcess } from "../../components/VettingPage/VettingProcess/VettingProcess";
import { VettingTalent } from "../../components/VettingPage/VettingTalent/VettingTalent";
import { VettingHiring } from "../../components/VettingPage/VettingHiring/VettingHiring";
import { VettingGrow } from "../../components/VettingPage/VettingGrow/VettingGrow";
import { VettingRoles } from "../../components/VettingPage/VettingRoles/VettingRoles";

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

export default function Vetting() {
  return (
    <div className={styles.vettingPageContainer}>
      <Head>
        <title> Our vetting-Process | Bottom Funnel </title>
        <meta
          name="description"
          content="We know you have a lot of doubts about online hiring. But we are here to change your perception about it! 
          We have been in this business for nine years, and we have got over 2,000 happy clients from various sectors across 
          the world."
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
        <VettingBanner />
        <VettingProcess />
        <VettingTalent />
        <VettingHiring />
        <VettingGrow />
        <VettingRoles />

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
