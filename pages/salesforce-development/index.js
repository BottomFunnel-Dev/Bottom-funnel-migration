import React from "react";
import styles from "./SalesforsePage.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const SaleforceBanner = dynamic(
  () =>
    import("../../components/SalesforsePage/SaleforceBanner/SaleforceBanner"),
  { loading: () => "loading..." },
);
const SalesforceOffers = dynamic(
  () =>
    import("../../components/SalesforsePage/SalesforceOffers/SalesforceOffers"),
  { loading: () => "loading..." },
);
const SalesforceServices = dynamic(
  () =>
    import(
      "../../components/SalesforsePage/SalesforceServices/SalesforceServices"
    ),
  { loading: () => "loading..." },
);
const SalesforceProcess = dynamic(
  () =>
    import(
      "../../components/SalesforsePage/SalesforceProcess/SalesforceProcess"
    ),
  { loading: () => "loading..." },
);
const SalesforceMidBanner = dynamic(
  () =>
    import(
      "../../components/SalesforsePage/SalesforceMidBanner/SalesforceMidBanner"
    ),
  { loading: () => "loading..." },
);
const SalesforceWhyBF = dynamic(
  () =>
    import("../../components/SalesforsePage/SalesforceWhyBF/SalesforceWhyBF"),
  { loading: () => "loading..." },
);
const CustomWebForm = dynamic(
  () =>
    import("../../components/CustomisedWebPage/CustomWebForm/CustomWebForm"),
  { loading: () => "loading..." },
);

export default function SalesForcePage() {
  return (
    <div className={styles.SalesforsePageContainer}>
      <Head>
        <title>SalesForce Development Service Comapany | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to get started with SalesForce Services? Learn 
          about the different services offered by SalesForce 
          and how you can use them to drive business growth."
        />
      </Head>
      <main>
        <SaleforceBanner />
        <SalesforceServices />
        <SalesforceOffers />
        <SalesforceProcess />
        <SalesforceMidBanner />
        <SalesforceWhyBF />
        <CustomWebForm />
      </main>
    </div>
  );
}
