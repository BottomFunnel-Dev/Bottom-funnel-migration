import React from "react";
import styles from "./CryptoDevPage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const CryptoDevBanner = dynamic(
  () =>
    import("../../components/CryptoDevPage/CryptoDevBanner/CryptoDevBanner"),
  { loading: () => "loading..." },
);
const CryptoDevcurrency = dynamic(
  () =>
    import(
      "../../components/CryptoDevPage/CryptoDevcurrency/CryptoDevcurrency"
    ),
  { loading: () => "loading..." },
);
const CryptoDevBenefit = dynamic(
  () =>
    import("../../components/CryptoDevPage/CryptoDevBenefit/CryptoDevBenefit"),
  { loading: () => "loading..." },
);
const CryptoDevApproach = dynamic(
  () =>
    import(
      "../../components/CryptoDevPage/CryptoDevApproach/CryptoDevApproach"
    ),
  { loading: () => "loading..." },
);
const CryptoDevService = dynamic(
  () =>
    import("../../components/CryptoDevPage/CryptoDevService/CryptoDevService"),
  { loading: () => "loading..." },
);
const CryptoDevWhyBF = dynamic(
  () => import("../../components/CryptoDevPage/CryptoDevWhyBF/CryptoDevWhyBF"),
  { loading: () => "loading..." },
);
const CryptoDevSlider = dynamic(
  () =>
    import("../../components/CryptoDevPage/CryptoDevSlider/CryptoDevSlider"),
  { loading: () => "loading..." },
);
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
