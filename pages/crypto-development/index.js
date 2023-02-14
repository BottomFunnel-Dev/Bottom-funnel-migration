import React from "react";
import styles from "./CryptoDevPage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

import { CryptoDevBanner } from "../../components/CryptoDevPage/CryptoDevBanner/CryptoDevBanner";
import { CryptoDevcurrency } from "../../components/CryptoDevPage/CryptoDevcurrency/CryptoDevcurrency";
import { CryptoDevBenefit } from "../../components/CryptoDevPage/CryptoDevBenefit/CryptoDevBenefit";
import { CryptoDevApproach } from "../../components/CryptoDevPage/CryptoDevApproach/CryptoDevApproach";
import { CryptoDevService } from "../../components/CryptoDevPage/CryptoDevService/CryptoDevService";
import { CryptoDevWhyBF } from "../../components/CryptoDevPage/CryptoDevWhyBF/CryptoDevWhyBF";
import { CryptoDevSlider } from "../../components/CryptoDevPage/CryptoDevSlider/CryptoDevSlider";
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function CryptoDevPage() {
  return (
    <div className={styles.CryptoDevPageContainer}>
      <Head>
        <title>Crypto Currency Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Interested in getting involved in the fast-growing 
          world of cryptocurrency? Our team of experienced 
          professionals offers comprehensive cryptocurrency 
          development services. Check them out!"
        />
      </Head>
      <main>
        <CryptoDevBanner />
        <CryptoDevcurrency />
        <CryptoDevBenefit />
        <CryptoDevApproach />
        <CryptoDevService />
        <CryptoDevWhyBF />
        <CryptoDevSlider />
        <CustomWebForm />
      </main>
    </div>
  );
}
