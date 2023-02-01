import React from "react";
import styles from "./VettingPage.module.css";

import { VettingBanner } from "../../components/VettingPage/VettingBanner/VettingBanner";
import { VettingProcess } from "../../components/VettingPage/VettingProcess/VettingProcess";
import { VettingTalent } from "../../components/VettingPage/VettingTalent/VettingTalent";
import { VettingHiring } from "../../components/VettingPage/VettingHiring/VettingHiring";
import { VettingGrow } from "../../components/VettingPage/VettingGrow/VettingGrow";
import { VettingRoles } from "../../components/VettingPage/VettingRoles/VettingRoles";

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

export default function Vetting() {
  return (
    <div className={styles.vettingPageContainer}>
      <Head>
        <title> Our vetting-process | Bottom Funnel </title>
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
