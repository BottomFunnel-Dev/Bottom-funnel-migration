import React from "react";

import GroceryBanner from "../../components/Grocery/GroceryBanner";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { groceryLogo } from "../../components/Data/SeopartnerData";
import DeliveryServices from "../../components/Grocery/DeliveryServices";
import { GroceryCustomer } from "../../components/Grocery/GroceryCustomer";
import { GroceryAdmin } from "../../components/Grocery/GroceryAdmin";
import { GroceryService } from "../../components/Grocery/GroceryService";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." }
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Grocery() {
  return (
    <>
      <Head>
        <title>Grocery web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable grocery web app 
        solution? Look no further than our team of experienced developers.
        We offer tailor-made solutions that will help you manage your 
        entire grocery experience from one place."
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
        <GroceryBanner />
        <Trusted partnerLogo={groceryLogo} />
        <DeliveryServices />
        <GroceryCustomer />
        <GroceryAdmin />
        <GroceryService />

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
