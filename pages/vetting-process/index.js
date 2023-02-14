import React from "react";
import styles from "./VettingPage.module.css";

import { VettingBanner } from "../../components/VettingPage/VettingBanner/VettingBanner";
import { VettingProcess } from "../../components/VettingPage/VettingProcess/VettingProcess";
import { VettingTalent } from "../../components/VettingPage/VettingTalent/VettingTalent";
import { VettingHiring } from "../../components/VettingPage/VettingHiring/VettingHiring";
import { VettingGrow } from "../../components/VettingPage/VettingGrow/VettingGrow";
import { VettingRoles } from "../../components/VettingPage/VettingRoles/VettingRoles";

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
        <VettingBanner />
        <VettingProcess />
        <VettingTalent />
        <VettingHiring />
        <VettingGrow />
        <VettingRoles />
      </main>
    </div>
  );
}
