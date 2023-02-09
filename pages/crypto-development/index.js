import React from "react";
import styles from "./CryptoDevPage.module.css";

import { CryptoDevBanner } from "../../components/CryptoDevPage/CryptoDevBanner/CryptoDevBanner";
import { CryptoDevcurrency } from "../../components/CryptoDevPage/CryptoDevcurrency/CryptoDevcurrency";
import { CryptoDevBenefit } from "../../components/CryptoDevPage/CryptoDevBenefit/CryptoDevBenefit";
import { CryptoDevApproach } from "../../components/CryptoDevPage/CryptoDevApproach/CryptoDevApproach";
import { CryptoDevService } from "../../components/CryptoDevPage/CryptoDevService/CryptoDevService";
import { CryptoDevWhyBF } from "../../components/CryptoDevPage/CryptoDevWhyBF/CryptoDevWhyBF";
import { CryptoDevSlider } from "../../components/CryptoDevPage/CryptoDevSlider/CryptoDevSlider";
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
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <CryptoDevBanner />
        <CryptoDevcurrency />
        <CryptoDevBenefit />
        <CryptoDevApproach />
        <CryptoDevService />
        <CryptoDevWhyBF />
        <CryptoDevSlider />
        <CustomWebForm />

        {/* Other react required components   */}
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
