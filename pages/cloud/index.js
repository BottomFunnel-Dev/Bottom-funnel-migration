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
        <CloudBanner />
        <CloudUnique />
        <CloudStats />
        <CloudOffers />
        <CloudWorkWithUs />
        <CloudSolutions />
        <CloudWhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
