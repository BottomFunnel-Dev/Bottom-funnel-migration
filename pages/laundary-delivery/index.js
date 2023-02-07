import React from "react";

import LaudryApplication from "../../components/LaundryPage/LaudryApplication";
import LaundryAdmin from "../../components/LaundryPage/LaundryAdmin";
import { Laundryapppagelowerfooter } from "../../components/LaundryPage/Laundryapppagelowerfooter";

import LaundryBannerlower from "../../components/LaundryPage/LaundryBannerlower";
import LaundryCustomer from "../../components/LaundryPage/LaundryCustomer";
import LaundryDelivery from "../../components/LaundryPage/LaundryDelivery";
import LaundryPageBanner from "../../components/LaundryPage/LaundryPageBanner";

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

export default function LaundryPage() {
  return (
    <>
      <Head>
      <title>Laundry Web and App Development Company | Bottom Funnel</title>
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
          logo: true,
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
