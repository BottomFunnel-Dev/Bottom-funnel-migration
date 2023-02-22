import React from "react";
import styles from "./CloudPage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const CloudBanner = dynamic(
  () => import("../../components/CloudPage/CloudBanner/CloudBanner"),
  { loading: () => "loading..." },
);
const CloudUnique = dynamic(
  () => import("../../components/CloudPage/CloudUnique/CloudUnique"),
  { loading: () => "loading..." },
);
const CloudStats = dynamic(
  () => import("../../components/CloudPage/CloudStats/CloudStats"),
  { loading: () => "loading..." },
);
const CloudOffers = dynamic(
  () => import("../../components/CloudPage/CloudOffers/CloudOffers"),
  { loading: () => "loading..." },
);
const CloudWorkWithUs = dynamic(
  () => import("../../components/CloudPage/CloudWorkWithUs/CloudWorkWithUs"),
  { loading: () => "loading..." },
);
const CloudSolutions = dynamic(
  () => import("../../components/CloudPage/CloudSolutions/CloudSolutions"),
  { loading: () => "loading..." },
);
const CloudWhyBF = dynamic(
  () => import("../../components/CloudPage/CloudWhyBF/CloudWhyBF"),
  { loading: () => "loading..." },
);
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
