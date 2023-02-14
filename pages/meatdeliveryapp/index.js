import React from "react";
import { MeatDeliveryAdmin } from "../../components/MeatDelivery/MeatDeliveryAdmin";
import { MeatDeliveryBanner } from "../../components/MeatDelivery/MeatDeliveryBanner";
import { MeatDeliveryCustomerApp } from "../../components/MeatDelivery/MeatDeliveryCustomerApp";
import { MeatDeliveryLowerBanner } from "../../components/MeatDelivery/MeatDeliveryLowerBanner";
import { MeatDeliveryPartnerApp } from "../../components/MeatDelivery/MeatDeliveryPartnerApp";

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

export default function MeatDelivery() {
  return (
    <div>
      <Head>
        <title>
          Meat Delivery Web and App Development Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Are you looking for a reliable and trustworthy Meat Delivery 
          Web App Development company that can help you create a
           successful Meat Delivery Web App? Look no further!"
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
        
        <MeatDeliveryBanner />
        <MeatDeliveryCustomerApp />
        <MeatDeliveryAdmin />
        <MeatDeliveryPartnerApp />
        <MeatDeliveryLowerBanner />

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
    </div>
  );
}
