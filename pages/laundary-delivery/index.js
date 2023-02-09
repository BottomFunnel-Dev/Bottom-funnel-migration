import React from "react";

import LaudryApplication from "../../components/LaundryPage/LaudryApplication";
import LaundryAdmin from "../../components/LaundryPage/LaundryAdmin";
import { Laundryapppagelowerfooter } from "../../components/LaundryPage/Laundryapppagelowerfooter";

import LaundryBannerlower from "../../components/LaundryPage/LaundryBannerlower";
import LaundryCustomer from "../../components/LaundryPage/LaundryCustomer";
import LaundryDelivery from "../../components/LaundryPage/LaundryDelivery";
import LaundryPageBanner from "../../components/LaundryPage/LaundryPageBanner";

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

export default function LaundryPage() {
  return (
    <>
      <Head>
        <title> Laundry Web and App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="Are you looking for a laundry web app development company that 
        can help you create a tailored and effective solution for your 
        laundry needs? Look no further than ours! Our team of 
        experienced developers will create a web app that meets your 
        specific needs and requirements."
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
        <LaundryPageBanner />
        <LaudryApplication />
        <LaundryCustomer />
        <LaundryDelivery />
        <LaundryAdmin />
        <LaundryBannerlower />
        <Laundryapppagelowerfooter />

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </>
  );
}
