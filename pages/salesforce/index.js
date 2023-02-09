import React from "react";
import styles from "./SalesforsePage.module.css";

import { SaleforceBanner } from "../../components/SalesforsePage/SaleforceBanner/SaleforceBanner";
import { SalesforceOffers } from "../../components/SalesforsePage/SalesforceOffers/SalesforceOffers";
import { SalesforceServices } from "../../components/SalesforsePage/SalesforceServices/SalesforceServices";
import { SalesforceProcess } from "../../components/SalesforsePage/SalesforceProcess/SalesforceProcess";
import { SalesforceMidBanner } from "../../components/SalesforsePage/SalesforceMidBanner/SalesforceMidBanner";
import { SalesforceWhyBF } from "../../components/SalesforsePage/SalesforceWhyBF/SalesforceWhyBF";
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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <SaleforceBanner />
        <SalesforceServices />
        <SalesforceOffers />
        <SalesforceProcess />
        <SalesforceMidBanner />
        <SalesforceWhyBF />
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
